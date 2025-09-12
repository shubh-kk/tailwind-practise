// components/theme-toggle.tsx
"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md border bg-card text-card-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800"
    >
      Toggle Theme
    </button>
  );
}