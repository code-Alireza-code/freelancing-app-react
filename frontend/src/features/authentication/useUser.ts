import { useQuery } from "@tanstack/react-query";
import { getUserProfileAPI } from "../../services/authService";

export function useUser() {
  const { data, isLoading: isLoadingUser } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUserProfileAPI,
    retry: false,
  });

  const { user } = data || {};

  return { user, isLoadingUser };
}
