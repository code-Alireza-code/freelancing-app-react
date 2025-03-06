import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createProposalAPI,
  getAllProposalsAPI,
} from "../../services/proposalService";
import toast from "react-hot-toast";
import { BackendError } from "../../types/error";

export function useGetAllProposals() {
  const { data, isLoading: isLoadingProposals } = useQuery({
    queryKey: ["all-proposals"],
    queryFn: getAllProposalsAPI,
  });

  const { proposals } = data || {};

  return { proposals, isLoadingProposals };
}

export function useCreateProposal() {
  const { mutateAsync: createProposal, isPending: isCreatingProposal } =
    useMutation({
      mutationFn: createProposalAPI,
      onSuccess: (data) => {
        toast.success(data.message);
      },
      onError: (err: unknown) => {
        toast.error(
          (err as BackendError)?.response?.data?.message ||
            "خطا در هنگام ایجاد درخواست"
        );
      },
    });

  return { createProposal, isCreatingProposal };
}
