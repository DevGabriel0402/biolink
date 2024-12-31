import "./App.css";
import { useEffect } from "react";
import { Container } from "./components/Container/Container.jsx";

function App() {
  useEffect(() => {
    const hideLoading = () => {
      const loadingElement = document.getElementById("loading");
      if (loadingElement) {
        setTimeout(() => {
          loadingElement.style.display = "none";
          loadingElement.style.opacity = "0";
          loadingElement.style.transition = "all .3s";
        }, 1200);
      }
    };

    window.addEventListener("load", hideLoading);
  }, []);
  return (
    <>
      <Container />
    </>
  );
}

export default App;
