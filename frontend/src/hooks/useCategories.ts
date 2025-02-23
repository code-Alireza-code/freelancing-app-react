import { useQuery } from "@tanstack/react-query";
import { getAllCategoriesAPI } from "../services/categoryService";

export const useGetAllCategories = () =>
  useQuery({ queryKey: ["all-categories"], queryFn: getAllCategoriesAPI });
