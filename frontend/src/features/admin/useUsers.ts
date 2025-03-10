import { useQuery } from "@tanstack/react-query";
import { getAllUsersAPI } from "../../services/authService";
import { UserType } from "../../types/user";

export function useUsers() {
  const { data, isLoading: isLoadingUsers } = useQuery({
    queryKey: ["all-users"],
    queryFn: getAllUsersAPI,
  });

  const { users }: { users: UserType[] } = data || {};

  return { users, isLoadingUsers };
}
