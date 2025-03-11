import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useUser } from "./useUser";
import { useNavigate } from "react-router-dom";

function AuthContainer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm setPhoneNumber={setPhoneNumber} setStep={setStep} />
        );
      case 2:
        return (
          <CheckOTPForm phoneNumber={phoneNumber} onBack={() => setStep(1)} />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
