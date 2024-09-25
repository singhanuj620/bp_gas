import "./App.css";
import usePwaInstallPrompt from "./usePwaInstallPrompt";
import { Homepage, Navbar, Footer } from "./Components";
const App = () => {
  usePwaInstallPrompt();
  return (
    <div className="min-h-[100vh]">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
};

export default App;
