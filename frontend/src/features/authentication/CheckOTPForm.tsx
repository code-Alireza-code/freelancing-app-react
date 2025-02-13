import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import TextField from "../../ui/TextField";
import { IoMdArrowRoundForward } from "react-icons/io";

const validationSchema = z.object({
  otp: z.string().nonempty("کد تایید را وارد کنید"),
});

type CheckOTPFormDataType = {
  otp: string;
};

function CheckOTPForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CheckOTPFormDataType>({
    resolver: zodResolver(validationSchema),
  });

  const handleCheckOTP = (formData: CheckOTPFormDataType) => {
    console.log(formData);
  };

  return (
    <div className="w-full sm:max-w-sm justify-center">
      <div className="p-8 border border-gray-200 rounded-lg">
        <div className=" relative flex items-center justify-center text-center text-2xl font-bold text-primary-900 mb-10">
          <span>فریلنسینگ اپ</span>
          <button
            className="absolute right-0  text-lg text-gray-600"
            // onClick={}
          >
            <IoMdArrowRoundForward />
          </button>
        </div>
        <div className="font-bold mb-8 text-lg">کد تایید را وارد کنید</div>
        <div className="text-sm mb-4">کد تایید برای شماره x پیامک شد</div>
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
            placeholder="شماره خود را وارد کنید..."
          />
          {errors["otp"] && (
            <span className="text-xs text-error">{errors.otp.message}</span>
          )}
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckOTPForm;
