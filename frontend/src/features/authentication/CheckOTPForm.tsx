import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import TextField from "../../ui/TextField";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useEffect, useState } from "react";
import Loading from "../../ui/Loading";
import { MdEdit } from "react-icons/md";
import { useCheckOtp, useResendOtp } from "./useUser";

const validationSchema = z.object({
  otp: z.string().nonempty("کد تایید را وارد کنید"),
});

type CheckOTPFormDataType = {
  otp: string;
};

type CheckOTPFormPropsType = {
  phoneNumber: string;
  onBack: () => void;
};

function CheckOTPForm({ phoneNumber, onBack }: CheckOTPFormPropsType) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CheckOTPFormDataType>({
    resolver: zodResolver(validationSchema),
  });
  const [time, setTime] = useState(90);

  const { mutateCheckOtp, isCheckingOtp } = useCheckOtp();

  const handleCheckOTP = async (formData: CheckOTPFormDataType) => {
    await mutateCheckOtp({ phoneNumber, ...formData });
  };

  const { mutateResendOtp } = useResendOtp();

  const handleResendOtp = async () => {
    await mutateResendOtp({ phoneNumber });
    setTime(90);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [time]);

  return (
    <div className="p-8 border border-gray-200 dark:border-gray-700 text-secondary-900 rounded-lg">
      <div className=" relative flex items-center justify-center text-center text-2xl font-bold text-primary-900 mb-10">
        <span>فریلنسینگ اپ</span>
        <button
          className="absolute right-0  text-lg text-gray-600"
          onClick={onBack}
        >
          <IoMdArrowRoundForward />
        </button>
      </div>
      <div className="font-bold mb-8 text-lg">کد تایید را وارد کنید</div>
      <div className="text-sm mb-4 flex items-center">
        کد تایید برای شماره {phoneNumber} پیامک شد.&nbsp;
        <button
          type="button"
          className="underline flex text-primary-900 p-0.5"
          onClick={onBack}
        >
          ویرایش
          <MdEdit className="w-4 h-4" />
        </button>
      </div>
      <form
        noValidate
        onSubmit={handleSubmit(handleCheckOTP)}
        className="space-y-10"
      >
        <TextField
          label=""
          type="number"
          {...register("otp")}
          className={`${errors["otp"] && "border border-error"}`}
          placeholder="کد تایید را وارد کنید"
        />
        {errors["otp"] && (
          <span className="text-xs text-error">{errors.otp.message}</span>
        )}
        {time > 0 ? (
          <div className="text-sm text-secondary-600">
            {time} ثانیه تا ارسال مجدد کد
          </div>
        ) : (
          <button
            onClick={handleResendOtp}
            type="button"
            className="underline underline-offset-8 hover:text-primary-900"
          >
            ارسال مجدد کد ؟
          </button>
        )}
        {isCheckingOtp ? (
          <Loading />
        ) : (
          <button type="submit" className={`btn btn--primary w-full `}>
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default CheckOTPForm;
