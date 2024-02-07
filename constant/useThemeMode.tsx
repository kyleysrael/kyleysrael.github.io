// useThemeMode.ts
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./theme";

export const useThemeMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    // You can save the theme preference in local storage or other storage mechanism
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Use system preference if no preference is saved
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return { theme, isDarkMode, toggleTheme };
};
