import "./App.css";
import { useEffect } from "react";
import { Container } from "./components/Container/Container.jsx";

function App() {
  useEffect(() => {
    const hideLoading = () => {
      const loadingElement = document.getElementById("loading");
      if (loadingElement) {
        loadingElement.style.display = "none";
      }
    };

    window.addEventListener("load", hideLoading);

    return () => {
      window.removeEventListener("load", hideLoading);
    };
  }, []);
  return (
    <>
      <Container />
    </>
  );
}

export default App;
