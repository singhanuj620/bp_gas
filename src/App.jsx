import "./App.css";
import usePwaInstallPrompt from "./usePwaInstallPrompt";
import { Homepage, Navbar, Footer, Result } from "./Components";
import { useSelector } from "react-redux";
import { allRoutes } from "./constants/allRoutes";
const App = () => {
  const { path } = useSelector((state) => state.path);
  usePwaInstallPrompt();
  return (
    <div className="min-h-[100vh]">
      <Navbar />
      {path === allRoutes.homepage && <Homepage />}
      {path === allRoutes.results && <Result />}
      <Footer />
    </div>
  );
};

export default App;
