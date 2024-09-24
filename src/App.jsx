import BPLogo from "../public/bp-logo.svg";
import { useTranslation } from "react-i18next";
import usePwaInstallPrompt from "./usePwaInstallPrompt";

const App = () => {
  usePwaInstallPrompt();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <h1>Appp</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>{t("welcome")}</h1>
      <img src={BPLogo} alt="BP Logo" width="100" height="100" />
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("de")}>Deutsch</button>
    </div>
  );
};

export default App;
