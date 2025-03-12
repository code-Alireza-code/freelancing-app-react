import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Loading from "../../ui/Loading";
import { useSendOtp } from "./useUser";
import { useEffect } from "react";
import CustomToast from "../../ui/CustomToast";

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

  useEffect(() => {
    CustomToast({
      buttonLabel: "باشه",
      label: "زبان کیبورد خود را به انگلیسی تغییر دهید",
      duration: 4000,
    });
  }, []);

  const { mutateGetOtp, isGetting } = useSendOtp();

  const handleSendOTP = async (formData: SendOTPFormDataType) => {
    await mutateGetOtp(formData, {
      onSuccess: () => {
        setPhoneNumber(formData.phoneNumber);
        setStep(2);
      },
    });
  };

  return (
    <div className="p-8 bg-secondary-50 border text-secondary-900 border-gray-200 dark:border-gray-700 rounded-lg">
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
        {isGetting ? (
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
