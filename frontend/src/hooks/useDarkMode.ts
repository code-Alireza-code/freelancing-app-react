import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export function useDarkMode() {
  const queryClient = useQueryClient();
  const { data: isDarkMode } = useQuery({
    queryKey: ["theme"],
    queryFn: () => {
      const stored = localStorage.getItem("darkMode");
      if (stored !== null) {
        return JSON.parse(stored);
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    },
    staleTime: Infinity,
  });

  const { mutate: toggleDarkMode } = useMutation({
    mutationKey: ["change-theme"],
    mutationFn: async () => {
      const newValue = !isDarkMode;
      localStorage.setItem("darkMode", JSON.stringify(newValue));
      return newValue;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["theme"] });
    },
  });

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add("dark-mode");
    if (!isDarkMode) document.documentElement.classList.remove("dark-mode");
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
}
