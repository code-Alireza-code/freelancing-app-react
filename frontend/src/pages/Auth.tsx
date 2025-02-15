import toast from "react-hot-toast";
import CheckOTPForm from "../features/authentication/CheckOTPForm";
import SendOTPForm from "../features/authentication/SendOTPForm";
import { useState } from "react";

function Auth() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  const onSendOTP = (formData: { phoneNumber: string }) => {
    setStep(2);
    toast.success("کد تایید برای شما ارسال شد");
    setPhoneNumber(formData.phoneNumber);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      {step === 1 ? (
        <SendOTPForm handleSendOTP={onSendOTP} />
      ) : (
        <CheckOTPForm phoneNumber={phoneNumber} />
      )}
    </div>
  );
}

export default Auth;
