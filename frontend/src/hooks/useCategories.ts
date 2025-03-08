import { useQuery } from "@tanstack/react-query";
import { getAllCategoriesAPI } from "../services/categoryService";

export function useGetAllCategories() {
  const { data, isLoading: isLoadingCategories } = useQuery({
    queryKey: ["all-categories"],
    queryFn: getAllCategoriesAPI,
  });

  const { categories } = data || {};

  return { categories, isLoadingCategories };
}
