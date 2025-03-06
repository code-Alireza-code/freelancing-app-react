import { CreateProposalFormDataType } from "./../features/proposals/CreateProposalForm";
import { ProposalStatusFormDataType } from "../features/project/ChangeProposalStatus";
import http from "./httpService";

type ChangeProposalStatusAPI = {
  data: { projectId: string } & ProposalStatusFormDataType;
  proposalId: string;
};

export async function ChangeProposalStatusAPI({
  data,
  proposalId,
}: ChangeProposalStatusAPI) {
  return http
    .patch(`/proposal/${proposalId}`, data)
    .then(({ data }) => data.data);
}

export async function getAllProposalsAPI() {
  return http.get("/proposal/list").then(({ data }) => data.data);
}

type CreateProposalAPIDataType = {
  projectId: string;
} & CreateProposalFormDataType;

export async function createProposalAPI(data: CreateProposalAPIDataType) {
  return http.post("/proposal/add", data).then(({ data }) => data.data);
}
