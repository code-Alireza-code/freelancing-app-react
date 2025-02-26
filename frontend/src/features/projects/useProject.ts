import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createProjectAPI,
  editProjectAPI,
  getAllProjectsAPI,
  removeProjectAPI,
  updateProjectStatusAPI,
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

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutateAsync: createProject } = useMutation({
    mutationFn: createProjectAPI,
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError(error: unknown) {
      toast.error(
        (error as BackendError)?.response?.data?.message ||
          "خطا در هنگام افزودن پروژه !"
      );
    },
  });

  return { createProject, isCreating };
};

export const useEditProject = () => {
  const queryClient = useQueryClient();
  const { isPending: isEditing, mutateAsync: editProject } = useMutation({
    mutationFn: editProjectAPI,
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError(error: unknown) {
      toast.error(
        (error as BackendError)?.response?.data?.message ||
          "خطا در هنگام ویرایش پروژه !"
      );
    },
  });

  return { editProject, isEditing };
};

export const useUpdateProjectStatus = () => {
  const queryClient = useQueryClient();
  const { isPending: isUpdatingStatus, mutateAsync: updateStatus } =
    useMutation({
      mutationFn: updateProjectStatusAPI,
      onSuccess(data) {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
      },
      onError(error: unknown) {
        toast.error(
          (error as BackendError)?.response?.data?.message ||
            "خطا در هنگام ویرایش وضعیت پروژه !"
        );
      },
    });

  return { isUpdatingStatus, updateStatus };
};
