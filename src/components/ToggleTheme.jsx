import { useTheme } from "./Theme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full bg-stone-500 px-6 py-3"
    >
      Switch to {theme === "light" ? "Light" : "Dark"} Mode
    </button>
  );
}
