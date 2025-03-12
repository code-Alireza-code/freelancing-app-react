import { useQuery } from "@tanstack/react-query";
import { getAllCategoriesAPI } from "../services/categoryService";
import { CategoryType } from "../types/categories";

export function useGetAllCategories() {
  const { data, isLoading: isLoadingCategories } = useQuery({
    queryKey: ["all-categories"],
    queryFn: getAllCategoriesAPI,
  });

  const { categories }: { categories: CategoryType[] } = data || {};

  return { categories, isLoadingCategories };
}
