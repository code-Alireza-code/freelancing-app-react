import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import TextField from "../../ui/TextField";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import { checkOtpAPI, getOtpAPI } from "../../services/authService";
import toast from "react-hot-toast";
import { BackendError } from "../../types/error";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../ui/Loading";
import { MdEdit } from "react-icons/md";

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
  const { mutateAsync: mutateCheckOtp, isPending: isCheckingOtp } = useMutation(
    {
      mutationFn: checkOtpAPI,
    }
  );
  const navigate = useNavigate();

  const handleCheckOTP = async (formData: CheckOTPFormDataType) => {
    try {
      const { user, message } = await mutateCheckOtp({
        ...formData,
        phoneNumber,
      });
      toast.success(message);
      if (user.isActive) {
        if (user.role === "OWNER") return navigate("/owner", { replace: true });
        else if (user.role === "ADMIN")
          return navigate("/admin", { replace: true });
      }
      navigate("/complete-profile", { replace: true });
    } catch (error) {
      const err = error as BackendError;
      toast.error(
        err?.response?.data?.message || "خطا در هنگام بررسی کد تایید"
      );
    }
  };
  const { mutateAsync: mutateResendOtp } = useMutation({
    mutationFn: getOtpAPI,
  });
  const handleResendOtp = async () => {
    try {
      const data = await mutateResendOtp({ phoneNumber });
      toast.success(data.message);
    } catch (error) {
      const err = error as BackendError;
      toast.error(
        err?.response?.data?.message || "خطا در هنگام ارسال کد تایید"
      );
    }
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
    <div className="p-8 border border-gray-200 rounded-lg">
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
          <div className="text-sm text-gray-700">
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
