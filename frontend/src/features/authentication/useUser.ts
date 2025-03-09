import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserProfileAPI, logoutUserAPI } from "../../services/authService";
import toast from "react-hot-toast";
import { BackendError } from "../../types/error";
import { useLocation, useNavigate } from "react-router-dom";
import { UserType } from "../../types/user";

export function useUser() {
  const { data, isLoading: isLoadingUser } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUserProfileAPI,
    retry: false,
  });

  const { user }: { user: UserType } = data || {};

  return { user, isLoadingUser };
}

export function useLogoutUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutUserAPI,
    onSuccess: (data) => {
      queryClient.removeQueries();
      toast.success(data?.message || "از حساب کاربری خارج شدید !");
      navigate("/", { replace: true });
    },
    onError: (error: unknown) => {
      toast.error(
        (error as BackendError)?.response?.data?.message ||
          "خطا در هنگام خروج از حساب کاربری"
      );
    },
  });

  return { logout, isPending };
}

export function useAuthorize() {
  const { user, isLoadingUser } = useUser();
  const { pathname } = useLocation();

  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isAuthorized = false;
  if (user && pathname.split("/")[1] === user.role.toLowerCase())
    isAuthorized = true;

  return { isAuthenticated, isAuthorized, isLoadingUser };
}
