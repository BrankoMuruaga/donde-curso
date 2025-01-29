"use client";

import Moon from "@src/icons/Moon";
import Sun from "@src/icons/Sun";

import { useEffect } from "react";

import Logo from "@components/Logo";

function Navbar() {
  useEffect(() => {
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");

    const setTheme = (theme: string) => {
      if (theme === "dark") {
        document.documentElement.classList.add("darkmode");
        sun?.classList.remove("hidden");
        moon?.classList.add("hidden");
      } else {
        document.documentElement.classList.remove("darkmode");
        sun?.classList.add("hidden");
        moon?.classList.remove("hidden");
      }
      localStorage.setItem("theme", theme);
    };

    const getPreferredTheme = () =>
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches &&
      localStorage.getItem("theme") !== "dark"
        ? "light"
        : "dark";
    sun?.addEventListener("click", () => setTheme("light"));
    moon?.addEventListener("click", () => setTheme("dark"));

    const defaultTheme = getPreferredTheme();
    setTheme(defaultTheme);

    return () => {
      sun?.removeEventListener("click", () => setTheme("light"));
      moon?.removeEventListener("click", () => setTheme("dark"));
    };
  }, []);

  return (
    <nav className="flex justify-between items-center p-4 bg-[var(--background)] relative">
      <Logo />
      <div className="flex items-center justify-center m-2 relative size-8 cursor-pointer rounded-full p-5 dark:hover:bg-gray-700 hover:bg-gray-300">
        <Sun id="sun" className="absolute size-8" />
        <Moon id="moon" className="absolute size-8 hidden" />
      </div>
    </nav>
  );
}

export default Navbar;
