import { ReactNode, useEffect } from "react";
import { useAuthorize } from "../features/authentication/useUser";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isLoadingUser, isAuthenticated, isAuthorized } = useAuthorize();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoadingUser)
      navigate("/auth", { replace: true });
    if (!isAuthorized && !isLoadingUser)
      navigate("/not-access", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isAuthorized, isLoadingUser]);

  if (isLoadingUser)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );

  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
