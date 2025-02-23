import { useForm, Controller } from "react-hook-form";
import TextField from "../../ui/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";

const validationSchema = z.object({
  title: z.string().nonempty("عنوان را خالی نگذارید"),
  description: z.string().nonempty("توضیحات را خالی نگذارید"),
  budget: z
    .number({ message: "بودجه را وارد کنید" })
    .nonnegative("بودجه نباید منفی باشد !"),
  tags: z.array(z.string()).optional(),
  deadline: z.string({ required_error: "تاریخ ددلاین را وارد کنید" }),
});

export type AddProjectFormDataType = z.infer<typeof validationSchema>;

function CreateProjectForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddProjectFormDataType>({
    resolver: zodResolver(validationSchema),
  });

  const handleAddProject = (formData: AddProjectFormDataType) => {
    console.log(formData);
  };

  return (
    <form
      className="space-y-6"
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
        {...register("budget", { valueAsNumber: true })}
        label="بودجه پروژه"
        type="number"
        dir="ltr"
        errors={errors}
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
      <button className="btn btn--primary w-full" type="submit">
        ایجاد پروژه
      </button>
    </form>
  );
}

export default CreateProjectForm;
