import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validationSchema = z.object({
  title: z.string().nonempty("عنوان را خالی نگذارید"),
  description: z.string().nonempty("توضیحات را خالی نگذارید"),
  budget: z
    .number({ message: "بودجه را وارد کنید" })
    .nonnegative("بودجه نباید منفی باشد !"),
});

export type AddProjectFormDataType = z.infer<typeof validationSchema>;

function CreateProjectForm() {
  const {
    register,
    handleSubmit,
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
      <TextField {...register("title")} label="عنوان پروژه" />
      {errors["title"] && (
        <span className="text-error text-xs">{errors.title.message}</span>
      )}
      <TextField {...register("description")} label="توضیحات پروژه" />
      {errors["description"] && (
        <span className="text-error text-xs">{errors.description.message}</span>
      )}
      <TextField
        {...register("budget", { valueAsNumber: true })}
        label="بودجه پروژه"
        type="number"
        dir="ltr"
      />
      {errors["budget"] && (
        <span className="text-error text-xs">{errors.budget.message}</span>
      )}
      <button className="btn btn--primary w-full" type="submit">
        ایجاد پروژه
      </button>
    </form>
  );
}

export default CreateProjectForm;
