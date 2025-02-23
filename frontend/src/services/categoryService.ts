import http from "./httpService";

export async function getAllCategoriesAPI() {
  return http.get("/category/list").then(({ data }) => data.data);
}
