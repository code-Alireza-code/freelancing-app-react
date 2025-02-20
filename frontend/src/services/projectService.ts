import http from "./httpService";

export async function getAllProjectsAPI() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}
