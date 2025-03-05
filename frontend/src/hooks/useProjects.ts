import { useQuery } from "@tanstack/react-query";
import { getAllProjectsAPI } from "../services/projectService";

export function useGetAllProjects() {
  const { data, isLoading: isLoadingAllProjects } = useQuery({
    queryKey: ["all-projects"],
    queryFn: getAllProjectsAPI,
  });

  const { projects } = data || {};

  return { projects, isLoadingAllProjects };
}
