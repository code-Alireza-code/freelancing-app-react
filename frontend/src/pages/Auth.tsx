import CheckOTPForm from "../features/authentication/CheckOTPForm";
import SendOTPForm from "../features/authentication/SendOTPForm";
import { useState } from "react";

function Auth() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);

  return (
    <div className="flex items-center justify-center h-screen">
      {step === 1 ? (
        <SendOTPForm setPhoneNumber={setPhoneNumber} setStep={setStep} />
      ) : (
        <CheckOTPForm phoneNumber={phoneNumber} />
      )}
    </div>
  );
}

export default Auth;
