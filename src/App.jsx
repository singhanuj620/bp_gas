import "./App.css";
import usePwaInstallPrompt from "./usePwaInstallPrompt";
import { Homepage, Navbar, Footer } from "./Components";
import { useSelector } from "react-redux";
const App = () => {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  usePwaInstallPrompt();
  return (
    <div className="min-h-[100vh]">
      <Navbar />
      <Homepage />
      <Footer darkMode={isDarkMode} />
    </div>
  );
};

export default App;
