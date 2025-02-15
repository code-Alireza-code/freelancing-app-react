import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { getOtpAPI } from "../../services/authService";
import toast from "react-hot-toast";
import { BackendError } from "../../types/error";
import Loading from "../../ui/Loading";

type SendOTPFormPropsType = {
  setPhoneNumber: (phoneNumber: string) => void;
  setStep: (step: number) => void;
};
const validationSchema = z.object({
  phoneNumber: z.string().nonempty("*لطفا این قسمت را خالی نگذارید"),
});
type SendOTPFormDataType = z.infer<typeof validationSchema>;

function SendOTPForm({ setPhoneNumber, setStep }: SendOTPFormPropsType) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SendOTPFormDataType>({ resolver: zodResolver(validationSchema) });
  const { mutateAsync, isPending } = useMutation({ mutationFn: getOtpAPI });

  const handleSendOTP = async (formData: SendOTPFormDataType) => {
    try {
      const data = await mutateAsync(formData);
      toast.success(data.message);
      setPhoneNumber(formData.phoneNumber);
      setStep(2);
    } catch (error) {
      const err = error as BackendError;
      toast.error(
        err?.response?.data?.message || "خطا در هنگام ارسال کد تایید"
      );
    }
  };

  return (
    <div className="p-8 border border-gray-200 rounded-lg">
      <div className="text-center text-2xl font-bold text-primary-900 mb-10">
        فریلنسینگ اپ
      </div>
      <div className="font-bold mb-6 text-lg">ورود | ثبت نام</div>
      <form
        noValidate
        onSubmit={handleSubmit(handleSendOTP)}
        className="space-y-10"
      >
        <TextField
          label="شماره تلفن"
          type="number"
          {...register("phoneNumber")}
          className={`${errors["phoneNumber"] && "border border-error"}`}
          placeholder="شماره خود را وارد کنید..."
        />
        {errors["phoneNumber"] && (
          <span className="text-xs text-error">
            {errors.phoneNumber.message}
          </span>
        )}
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className={`btn btn--primary w-full `}>
            ورود
          </button>
        )}
      </form>
    </div>
  );
}

export default SendOTPForm;
