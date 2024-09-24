import { useEffect } from "react";

const usePwaInstallPrompt = () => {
  useEffect(() => {
    const handleBeforeInstallPrompt = () => {
      console.log("PWA install prompt is available");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);
};

export default usePwaInstallPrompt;
