import "../Container/container.css";
import { Header } from "../Header/Header.jsx";
import { Skills } from "../Skills/Skills.jsx";

export const Container = () => {
  return (
    <div className="container">
      <Header />
      <Skills />
    </div>
  );
};
