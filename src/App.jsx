import "./App.css";
import usePwaInstallPrompt from "./usePwaInstallPrompt";
import { Navbar } from "./Components";
const App = () => {
  usePwaInstallPrompt();
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
