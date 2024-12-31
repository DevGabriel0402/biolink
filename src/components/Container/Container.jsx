import "../Container/container.css";
import { Header } from "../Header/Header.jsx";
import { Skills } from "../Skills/Skills.jsx";
import { Projects } from "../Projects/Projects.jsx";
import { Loading } from "../Loading/Loading.jsx";
export const Container = () => {
  return (
    <>
      <Loading />
      <div className="container">
        <Header />
        <Skills />
        <Projects />
      </div>
    </>
  );
};
