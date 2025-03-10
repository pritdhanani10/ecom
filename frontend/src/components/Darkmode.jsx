import React, { useEffect, useState } from "react";
import { IoSunnyOutline, IoMoonSharp } from "react-icons/io5";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      {theme === "light" ? (
        <IoSunnyOutline
          onClick={() => setTheme("dark")}
          className="w-12 h-9 cursor-pointer transition-all duration-300"
        />
      ) : (
        <IoMoonSharp
          onClick={() => setTheme("light")}
          className="w-12 h-9 cursor-pointer transition-all duration-300"
        />
      )}
    </div>
  );
};

export default DarkMode;