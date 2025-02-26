import { AddProjectFormDataType } from "../features/projects/CreateProjectForm";
import { StatusValueType } from "../features/projects/ToggleProjectStatus";
import http from "./httpService";

export async function getAllProjectsAPI() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export async function removeProjectAPI(projectId: string) {
  return http.delete(`/project/${projectId}`).then(({ data }) => data.data);
}

export async function createProjectAPI(data: AddProjectFormDataType) {
  return http.post("/project/add", data).then(({ data }) => data.data);
}

export async function editProjectAPI({
  data,
  projectId,
}: {
  data: AddProjectFormDataType;
  projectId: string;
}) {
  return http
    .patch(`project/update/${projectId}`, data)
    .then(({ data }) => data.data);
}

export async function updateProjectStatusAPI({
  data,
  projectId,
}: {
  data: { status: StatusValueType };
  projectId: string;
}) {
  return http
    .patch(`/project/${projectId}`, data)
    .then(({ data }) => data.data);
}

export async function getSingleProjectAPI(projectId: string) {
  return http.get(`/project/${projectId}`).then(({ data }) => data.data);
}
