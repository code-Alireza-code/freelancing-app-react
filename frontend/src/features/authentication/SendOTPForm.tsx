import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";

type SendOTPFormDataType = {
  phoneNumber: number | string;
};

function SendOTPForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SendOTPFormDataType>();

  const handleSendOTP = (formData: SendOTPFormDataType) => {
    console.log(formData);
  };

  return (
    <div className="w-full sm:max-w-sm justify-center">
      <div className="p-8 border border-gray-200">
        <div className="text-center text-2xl font-bold text-primary-900 mb-10">
          فریلنسینگ اپ
        </div>
        <div className="font-bold mb-6 text-lg">ورود | ثبت نام</div>
        <form onSubmit={handleSubmit(handleSendOTP)} className="space-y-10">
          <TextField
            label="شماره تلفن"
            type="number"
            {...register("phoneNumber", { required: true })}
            className={`${errors["phoneNumber"] && "border border-error"}`}
            placeholder="شماره خود را وارد کنید..."
          />
          {errors["phoneNumber"] && (
            <span className="text-xs text-error">
              *لطفا این قسمت را خالی نگذارید
            </span>
          )}
          <button type="submit" className="btn btn--primary w-full">
            ورود
          </button>
        </form>
      </div>
    </div>
  );
}

export default SendOTPForm;
