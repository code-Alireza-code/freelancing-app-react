import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { changeUserStausAPI, getAllUsersAPI } from "../../services/authService";
import { UserType } from "../../types/user";
import toast from "react-hot-toast";
import { BackendError } from "../../types/error";

export function useUsers() {
  const { data, isLoading: isLoadingUsers } = useQuery({
    queryKey: ["all-users"],
    queryFn: getAllUsersAPI,
  });

  const { users }: { users: UserType[] } = data || {};

  return { users, isLoadingUsers };
}

export function useChangeUserStatus() {
  const queryClient = useQueryClient();
  const { mutateAsync: changeUserSatus, isPending: isChangingStatus } =
    useMutation({
      mutationFn: changeUserStausAPI,
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["all-users"] });
        toast.success(data.message);
      },
      onError: (error: unknown) => {
        toast.error(
          (error as BackendError).response.data.message ||
            "خطا هنگام تغییر وضعیت کاربر"
        );
      },
    });

  return { changeUserSatus, isChangingStatus };
}
