import { AddProjectFormDataType } from "../features/projects/CreateProjectForm";
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

