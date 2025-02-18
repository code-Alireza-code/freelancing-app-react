import { useQuery } from "@tanstack/react-query";
import { getUserProfileAPI } from "../services/authService";

export function useUser() {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: getUserProfileAPI,
    retry: false,
  });
}
