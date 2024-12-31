import "./loading.css";
import { useEffect } from "react";

export const Loading = () => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("loading").style.display = "none";
    }, 1200);
  }, []);

  return (
    <div id="loading">
      <div className="spin"></div>
    </div>
  );
};
