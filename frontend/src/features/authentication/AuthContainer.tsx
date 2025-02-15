import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";

function AuthContainer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm setPhoneNumber={setPhoneNumber} setStep={setStep} />
        );
      case 2:
        return <CheckOTPForm phoneNumber={phoneNumber} />;
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
