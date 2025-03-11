import AuthContainer from "../features/authentication/AuthContainer";
import { useDarkMode } from "../hooks/useDarkMode";

function Auth() {
  useDarkMode();
  return (
    <div className="flex items-center justify-center h-screen bg-secondary-0">
      <AuthContainer />
    </div>
  );
}

export default Auth;
