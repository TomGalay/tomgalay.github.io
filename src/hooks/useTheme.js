import { useState } from "react";

const THEMES = ["light", "dark", "blue"];

function storedTheme() {
  try {
    const t = localStorage.getItem("ig-theme");
    return THEMES.includes(t) ? t : "blue";
  } catch {
    return "blue";
  }
}

export default function useTheme() {
  const [theme, setTheme] = useState(storedTheme);

  const applyTheme = (id) => {
    setTheme(id);
    document.documentElement.dataset.theme = id;
    try {
      localStorage.setItem("ig-theme", id);
    } catch {}
  };

  return [theme, applyTheme];
}
