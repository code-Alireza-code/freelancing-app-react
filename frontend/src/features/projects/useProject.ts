import { useQuery } from "@tanstack/react-query";
import { getAllProjectsAPI } from "../../services/projectService";

export const useOwnerProjects = () =>
  useQuery({ queryKey: ["owner-projects"], queryFn: getAllProjectsAPI });
