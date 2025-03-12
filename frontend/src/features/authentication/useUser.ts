import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  checkOtpAPI,
  completeProfileAPI,
  getOtpAPI,
  getUserProfileAPI,
  logoutUserAPI,
} from "../../services/authService";
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

export function useCheckOtp() {
  const navigate = useNavigate();
  const { mutateAsync: mutateCheckOtp, isPending: isCheckingOtp } = useMutation(
    {
      mutationFn: checkOtpAPI,
      onSuccess: ({ user, message }: { user: UserType; message: string }) => {
        toast.success(message);
        if (!user.isActive)
          return navigate("/complete-profile", { replace: true });
        if (user.status !== 2) {
          navigate("/");
          toast("پروفایل شما در انتظار تایید است !");
          return;
        }
        if (user.role === "OWNER") return navigate("/owner", { replace: true });
        if (user.role === "FREELANCER")
          return navigate("/freelancer", { replace: true });
        if (user.role === "ADMIN") return navigate("/admin", { replace: true });
      },
      onError: (err: unknown) => {
        toast.error(
          (err as BackendError)?.response?.data?.message ||
            "خطا در هنگام بررسی کد تایید"
        );
      },
    }
  );

  return { mutateCheckOtp, isCheckingOtp };
}

export function useResendOtp() {
  const { mutateAsync: mutateResendOtp, isPending: isResending } = useMutation({
    mutationFn: getOtpAPI,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err: unknown) => {
      toast.error(
        (err as BackendError)?.response?.data?.message ||
          "خطا در هنگام ارسال کد تایید"
      );
    },
  });

  return { mutateResendOtp, isResending };
}

export function useSendOtp() {
  const { mutateAsync: mutateGetOtp, isPending: isGetting } = useMutation({
    mutationFn: getOtpAPI,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err: unknown) => {
      toast.error(
        (err as BackendError)?.response?.data?.message ||
          "خطا در هنگام ارسال کد تایید"
      );
    },
  });

  return { mutateGetOtp, isGetting };
}

export function useCompleteProfile() {
  const navigate = useNavigate();

  const { mutateAsync: mutateCompleteProfile, isPending } = useMutation({
    mutationFn: completeProfileAPI,
    onSuccess: ({ user, message }) => {
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است !");
        return;
      }
      if (user.role === "OWNER") return navigate("/owner", { replace: true });
      if (user.role === "FREELANCER")
        return navigate("/freelancer", { replace: true });
    },
    onError: (err: unknown) => {
      toast.error(
        (err as BackendError)?.response?.data?.message ||
          "خطا در هنگام ارسال اطلاعات به سرور"
      );
    },
  });

  return { mutateCompleteProfile, isPending };
}
