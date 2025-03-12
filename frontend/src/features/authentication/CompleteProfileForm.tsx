import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import RadioInput from "../../ui/RadioInput";
import Loading from "../../ui/Loading";
import { useCompleteProfile } from "./useUser";
import { useDarkMode } from "../../hooks/useDarkMode";

const validationSchema = z.object({
  name: z.string().nonempty("نام و نام خانوادگی الزامی است !"),
  email: z
    .string()
    .nonempty("ایمیل الزامی است !")
    .email("ایمیل وارد شده معتبر نیست !"),
  role: z.enum(["OWNER", "FREELANCER", ""], {
    message: "نقش را انتخاب کنید !",
  }),
});

export type CompleteProfileFormDataType = z.infer<typeof validationSchema>;

function CompleteProfileForm() {
  useDarkMode();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompleteProfileFormDataType>({
    resolver: zodResolver(validationSchema),
  });

  const { mutateCompleteProfile, isPending } = useCompleteProfile();

  const handleCompleteProfile = async (
    formData: CompleteProfileFormDataType
  ) => {
    await mutateCompleteProfile(formData);
  };

  return (
    <div className="w-[500px] p-10 border mt-10 border-gray-200 dark:border-gray-600 text-secondary-900 rounded-lg h-fit">
      <h1 className="text-2xl text-center mb-10">اطلاعات خود را تکمیل کنید</h1>
      <form
        noValidate
        onSubmit={handleSubmit(handleCompleteProfile)}
        className="space-y-6"
      >
        <TextField
          label="نام و نام خانوادگی"
          placeholder="برای مثال : رضا رضایی"
          {...register("name")}
        />
        {errors["name"] && (
          <span className="text-error text-xs">{errors.name.message}</span>
        )}
        <TextField
          label="ایمیل"
          placeholder="برای مثال: user@gmail.com"
          {...register("email")}
          dir="ltr"
        />
        {errors["email"] && (
          <span className="text-error text-xs">{errors.email.message}</span>
        )}
        <div>
          <div className="flex items-center justify-center gap-x-10">
            <RadioInput label="کارفرما" value="OWNER" {...register("role")} />
            <RadioInput
              label="فریلنسر"
              value="FREELANCER"
              {...register("role")}
            />
          </div>
          {errors["role"] && (
            <span className="text-error text-xs text-center block mt-1">
              {errors.role.message}
            </span>
          )}
        </div>
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className={`btn btn--primary w-full `}>
            تایید اطلاعات
          </button>
        )}
      </form>
    </div>
  );
}

export default CompleteProfileForm;
