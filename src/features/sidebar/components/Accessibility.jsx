import { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

function Accessibility() {
  const [isDarkMode, SetIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode ? "true" : "false");
  }, [isDarkMode]);

  return (
    <div className="mt-8 flex flex-row-reverse justify-end gap-2 sm:justify-start sm:gap-1">
      <div
        onClick={() => SetIsDarkMode(!isDarkMode)}
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-gray-200 p-1 transition-all hover:bg-gray-300 sm:h-6 sm:w-6 dark:bg-blue-400/20 dark:hover:bg-blue-400/30"
      >
        {isDarkMode ? (
          <HiSun className="h-5 w-5" />
        ) : (
          <HiMoon className="h-5 w-5" />
        )}
      </div>
      <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-gray-200 p-1 transition-all hover:bg-gray-300 sm:h-6 sm:w-6 dark:bg-blue-400/20 dark:hover:bg-blue-400/30">
        <a href="https://github.com/omid-nk" target="_blank">
          <FaGithub className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default Accessibility;
