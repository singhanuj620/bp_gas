import { useTranslation } from "react-i18next";
import useDarkMode from "../../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div
      className={`p-4 border-2 border-rose-500 flex flex-row justify-between items-center ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="flex flex-row items-center w-[30%]">
        <div>
          <img src="./bp-logo.svg" alt="BP Logo" width="50" height="50" />
        </div>
        <div
          className={`text-base md:text-2xl ml-6 font-semibold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {t("title")}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-6">
        <div className="cursor-pointer" onClick={() => toggleDarkMode()}>
          <img
            src={!darkMode ? "./icons/moon.svg" : "./icons/sun.svg"}
            alt="Theme Mode"
            width="30"
            height="30"
          />
        </div>
        <div className="flex flex-row">
          <div className={`${darkMode && "whitesvg"}`}>
            <img
              src="./icons/lang.svg"
              alt="Change language"
              width="30"
              height="30"
            />
          </div>
          <div>
            <select
              defaultValue={currentLanguage}
              className={`border-none outline-none cursor-pointer ml-2 ${
                darkMode ? "bg-black text-white" : "bg-white text-black"
              }`}
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              <option
                value="en"
                className={`${
                  darkMode ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                English
              </option>
              <option value="de" className="bg-white text-black">
                German
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
