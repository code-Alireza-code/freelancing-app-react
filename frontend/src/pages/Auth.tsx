import CheckOTPForm from "../features/authentication/CheckOTPForm";
import SendOTPForm from "../features/authentication/SendOTPForm";

function Auth() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* <SendOTPForm /> */}
      <CheckOTPForm />
    </div>
  );
}

export default Auth;
