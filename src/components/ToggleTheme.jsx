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
      className="rounded-full bg-stone-500 px-6 py-3 text-stone-200"
    >
      Switch to {theme === "light" ? "Light" : "Dark"} Mode
    </button>
  );
}
