import "../Projects/projects.css";
import { Box } from "./BoxComponents";
import BellaHImage from "@/assets/imagens/Bellah-freire.png";
import CharlesImage from "@/assets/imagens/Charles-gama.png";
import TaynaImage from "@/assets/imagens/Tayna-consultoria.png";
import CamilasImage from "@/assets/imagens/Camilas-cerimonial.png";

export const Projects = () => {
  const linkBellah = "https://bellahfotografia-links.netlify.app/";
  const linkTayna = "https://taynasouzaconsultoria.netlify.app/";
  const linkCharles = "https://gamafotografia-links.netlify.app/";
  const linkCamilas = "https://camilascerimonial-links.netlify.app/";

  return (
    <>
      <h2 style={{ color: "#fafafa", fontSize: "18px", paddingLeft: "10px" }}>
        Alguns trabalhos
      </h2>
      <div className="box-projects">
        <Box
          src={BellaHImage}
          title={"Bellah Freire"}
          id={"bella"}
          link={`${linkBellah}`}
        />
        <Box
          src={CharlesImage}
          title={"Charles Gama"}
          id={"charles"}
          link={linkCharles}
        />
        <Box
          src={CamilasImage}
          title={"Cerimonial Camila`s"}
          id={"camilas"}
          link={linkCamilas}
        />
        <Box
          src={TaynaImage}
          title={"Tayna Consultoria"}
          id={"tayna"}
          link={linkTayna}
        />
      </div>
    </>
  );
};
