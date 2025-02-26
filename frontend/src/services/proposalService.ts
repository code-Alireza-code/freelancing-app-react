import { ProposalStatusFormDataType } from "../features/project/ChangeProposalStatus";
import http from "./httpService";

export async function ChangeProposalStatusAPI({
  data,
  proposalId,
}: {
  data: ProposalStatusFormDataType;
  proposalId: string;
}) {
  return http
    .patch(`/proposal/${proposalId}`, data)
    .then(({ data }) => data.data);
}
