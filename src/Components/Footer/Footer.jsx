import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  const { isDarkMode: darkMode } = useSelector((state) => state.darkMode);
  return (
    <div
      className={`flex flex-col md:flex-row p-2 md:p-4 justify-between ${
        darkMode ? "bg-black" : "bg-slate-200"
      }`}
    >
      <div className="flex flex-row md:justify-center items-center">
        <div>
          <img src="./bp-logo.svg" alt="BP Logo" width="30" height="30" />
        </div>
        <div
          className={`flex flex-col text-sm font-bold justify-center ml-4 ${
            darkMode ? "text-slate-400" : "text-gray-500"
          }`}
        >
          <div>BP p.l.c.</div>
          <div>{t("copyRight")}</div>
        </div>
      </div>
      <div className="mt-4 pl-2 md:mt-0 md:pl-0">
        <div className="flex flex-row gap-6">
          <div className={`${darkMode ? "text-white" : "text-black"}`}>
            <a
              href="https://www.bp.com/en_gb/united-kingdom/home/privacy-statement.html"
              className="text-inherit no-underline"
              target="_blank"
            >
              {t("privacyStatement")}
            </a>
          </div>
          <div className={`${darkMode ? "text-white" : "text-black"}`}>
            <a
              href="https://www.bp.com/en_gb/united-kingdom/home/legal-notice.html"
              className="text-inherit no-underline"
              target="_blank"
            >
              {t("legalNotice")}
            </a>
          </div>
          <div className={`${darkMode ? "text-white" : "text-black"}`}>
            <a
              href="https://www.bp.com/en_gb/united-kingdom/home/who-we-are/contact-us.html"
              className="text-inherit no-underline"
              target="_blank"
            >
              {t("conatctUs")}
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-3 md:justify-end mt-4 md:mt-2">
          <div className={`cursor-pointer ${darkMode && "whitesvg"}`}>
            <img src="./icons/yt.svg" alt="YT Logo" width="20" height="20" />
          </div>
          <div className={`cursor-pointer ${darkMode && "whitesvg"}`}>
            <img src="./icons/fb.svg" alt="FB Logo" width="20" height="20" />
          </div>
          <div className={`cursor-pointer ${darkMode && "whitesvg"}`}>
            <img
              src="./icons/insta.svg"
              alt="INSTA Logo"
              width="20"
              height="20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
