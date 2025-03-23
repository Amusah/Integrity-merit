import { useEffect } from "react";

export const useEscapeEvent = (toggleFunction) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        toggleFunction();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Dependency array ensures effect re-runs if function reference changes
};
