import { useForm, Controller } from "react-hook-form";
import TextField from "../../ui/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import Select from "../../ui/Select";
import { useGetAllCategories } from "../../hooks/useCategories";
import { useCreateProject, useEditProject } from "./useProjects";
import Loading from "../../ui/Loading";
import { toEnglishNumbers } from "../../utils/toEnglishNumbers";
import { ProjectType } from "../../types/projects";

const validationSchema = z.object({
  title: z.string().nonempty("عنوان را خالی نگذارید"),
  description: z.string().nonempty("توضیحات را خالی نگذارید"),
  budget: z
    .string({ message: "فرمت وارد شده اشتباه است" })
    .nonempty("بودجه را وارد کنید")
    .transform((val) => parseFloat(toEnglishNumbers(val)))
    .refine((val) => val >= 100_000, {
      message: "بودجه کمتر از ۱۰۰ هزار تومان مقدور نیست !",
    })
    .transform((val) => val.toString()),
  tags: z.array(z.string()).optional(),
  category: z.string().nonempty("دسته بندی را انتخاب کنید"),
  deadline: z.string({ required_error: "تاریخ ددلاین را وارد کنید" }),
});

export type AddProjectFormDataType = z.infer<typeof validationSchema>;

type CreateProjectFormPropsType = {
  onClose: () => void;
  project?: ProjectType;
};

function CreateProjectForm({ onClose, project }: CreateProjectFormPropsType) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddProjectFormDataType>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      title: project?.title || "",
      budget: project?.budget.toString() || "",
      tags: project?.tags || [],
      category: project?.category._id || "",
      description: project?.description || "",
      deadline: project?.deadline || "",
    },
  });

  const { categories } = useGetAllCategories();

  const editMode = Boolean(project);
  const { editProject, isEditing } = useEditProject();

  const { createProject, isCreating } = useCreateProject();

  const handleAddProject = async (formData: AddProjectFormDataType) => {
    if (editMode) {
      await editProject(
        { data: formData, projectId: project!._id },
        {
          onSuccess: () => onClose(),
        }
      );
    } else {
      await createProject(formData, {
        onSuccess: () => onClose(),
      });
    }
  };

  return (
    <form
      className="space-y-6 text-secondary-900"
      noValidate
      onSubmit={handleSubmit(handleAddProject)}
    >
      <TextField {...register("title")} label="عنوان پروژه" errors={errors} />
      <TextField
        {...register("description")}
        label="توضیحات پروژه"
        errors={errors}
      />
      <TextField
        {...register("budget")}
        label="بودجه پروژه"
        dir="ltr"
        errors={errors}
      />
      <Select
        label="دسته بندی"
        options={categories}
        {...register("category")}
        errors={errors}
        defaultOption
      />
      <div>
        <label htmlFor="tags" className="">
          تگ ها
        </label>
        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <TagsInput value={field.value || []} onChange={field.onChange} />
          )}
        />
      </div>
      <DatePickerField
        errors={errors}
        label="ددلاین"
        control={control}
        name="deadline"
      />
      {isCreating || isEditing ? (
        <Loading />
      ) : (
        <button type="submit" className={`btn btn--primary w-full `}>
          {editMode ? "ویرایش پروژه" : "ایجاد پروژه"}
        </button>
      )}
    </form>
  );
}

export default CreateProjectForm;
