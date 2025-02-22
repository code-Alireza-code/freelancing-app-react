import http from "./httpService";

export async function getAllProjectsAPI() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export async function removeProjectAPI(projectId: string) {
  return http.delete(`/project/${projectId}`).then(({ data }) => data.data);
}
