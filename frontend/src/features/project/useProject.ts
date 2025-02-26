import { useQuery } from "@tanstack/react-query";
import { getSingleProjectAPI } from "../../services/projectService";
import { ProjectType } from "../../types/projects";

export const useGetSingleProject = (projectId: string) => {
  const { data, isLoading: isLoadingProject } = useQuery({
    queryKey: ["owner-project"],
    queryFn: () => getSingleProjectAPI(projectId),
  });

  const project: ProjectType = data?.project || {};

  return { project, isLoadingProject };
};
