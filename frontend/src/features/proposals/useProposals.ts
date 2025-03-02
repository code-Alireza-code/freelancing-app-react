import { useQuery } from "@tanstack/react-query";
import { getAllProposalsAPI } from "../../services/proposalService";

export function useGetAllProposals() {
  const { data, isLoading: isLoadingProposals } = useQuery({
    queryKey: ["all-proposals"],
    queryFn: getAllProposalsAPI,
  });

  const { proposals } = data || {};

  return { proposals, isLoadingProposals };
}
