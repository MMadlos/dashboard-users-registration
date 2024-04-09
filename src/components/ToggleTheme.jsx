import { useState, useEffect } from "react";

const localTheme = localStorage.getItem("theme");
const userPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localTheme || userPreference);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full dark:bg-emerald-600 px-6 py-3 dark:text-stone-200 dark:hover:bg-stone-800 dark:hover:text-emerald-400 bg-stone-700 text-emerald-500 hover:bg-emerald-400 hover:text-stone-800"
    >
      Cambiar a{" "}
      <span className="font-bold">
        modo {theme === "light" ? "claro" : "oscuro"}
      </span>
    </button>
  );
}
