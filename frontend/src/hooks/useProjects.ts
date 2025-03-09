import { useQuery } from "@tanstack/react-query";
import { getAllProjectsAPI } from "../services/projectService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export function useGetAllProjects() {
  const { search } = useLocation();

  const queryObject = queryString.parse(search);

  const { data, isLoading: isLoadingAllProjects } = useQuery({
    queryKey: ["all-projects", queryObject],
    queryFn: () => getAllProjectsAPI(search),
  });

  const { projects } = data || {};

  return { projects, isLoadingAllProjects };
}
