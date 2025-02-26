import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getSingleProjectAPI } from "../../services/projectService";
import { ProjectType } from "../../types/projects";
import { ChangeProposalStatusAPI } from "../../services/proposalService";
import toast from "react-hot-toast";
import { BackendError } from "../../types/error";

export const useGetSingleProject = (projectId: string) => {
  const { data, isLoading: isLoadingProject } = useQuery({
    queryKey: ["owner-project", projectId],
    queryFn: () => getSingleProjectAPI(projectId),
  });

  const project: ProjectType = data?.project || {};

  return { project, isLoadingProject };
};

export const useChangeProposalStatus = (projectId: string) => {
  const queryClient = useQueryClient();
  const { mutateAsync: changeStatus, isPending: isChangingStatus } =
    useMutation({
      mutationFn: ChangeProposalStatusAPI,
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.invalidateQueries({
          queryKey: ["owner-project", projectId],
        });
      },
      onError: (error: unknown) => {
        toast.error(
          (error as BackendError)?.response?.data?.message ||
            "خطا در هنگام ویرایش وضعیت پروژه"
        );
      },
    });

  return { changeStatus, isChangingStatus };
};
