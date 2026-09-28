import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      return storedTheme === "dark";
    }

    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      type="button"
      onClick={() => setIsDarkMode((prev) => !prev)}
      className="
        fixed
        bottom-5
        right-5
        md:top-5
        md:bottom-auto
        z-50
        p-2.5
        rounded-full
        border
        border-border
        bg-background/80
        backdrop-blur-md
        text-foreground
        hover:text-primary
        transition-all
        duration-300
      "
      aria-label={
        isDarkMode
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      title={
        isDarkMode
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};