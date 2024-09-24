import { useState } from "react";
import { isDarkMode } from "../constants/localStorage";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem(isDarkMode) === "true"
  );

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem(isDarkMode, newMode);
      return newMode;
    });
  };

  return [darkMode, toggleDarkMode];
};

export default useDarkMode;
