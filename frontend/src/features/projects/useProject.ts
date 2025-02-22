import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAllProjectsAPI,
  removeProjectAPI,
} from "../../services/projectService";
import toast from "react-hot-toast";
import { BackendError } from "../../types/error";

export const useOwnerProjects = () =>
  useQuery({ queryKey: ["owner-projects"], queryFn: getAllProjectsAPI });

export const useRemoveProject = () => {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutateAsync: removeProject } = useMutation({
    mutationFn: removeProjectAPI,
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError(error: unknown) {
      toast.error(
        (error as BackendError)?.response?.data?.message ||
          "خطا در هنگام حذف پروژه !"
      );
    },
  });

  return { removeProject, isDeleting };
};
