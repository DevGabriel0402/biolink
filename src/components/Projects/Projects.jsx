import "../Projects/projects.css";
import "animate.css";
import { Box } from "./BoxComponents";
import BellaHImage from "@/assets/imagens/Bellah-freire.png";
import CharlesImage from "@/assets/imagens/Charles-gama.png";
import TaynaImage from "@/assets/imagens/Tayna-consultoria.png";
import CamilasImage from "@/assets/imagens/Camilas-cerimonial.png";
import BioImage from "@/assets/imagens/Bio-link.png";
import LinkImage from "@/assets/imagens/Gabriel-link.png";

export const Projects = () => {
  const linkBellah = "https://bellahfotografia-links.netlify.app/";
  const linkTayna = "https://taynasouzaconsultoria.netlify.app/";
  const linkCharles = "https://gamafotografia-links.netlify.app/";
  const linkCamilas = "https://camilascerimonial-links.netlify.app/";
  const linkBio = "https://eugabrieldev.netlify.app/";
  const linkGabriel = "https://linksaqui.netlify.app/";

  return (
    <>
      <h2
        className="animate__animated animate__fadeInUp"
        style={{
          color: "#fafafa",
          fontSize: "18px",
          paddingLeft: "10px",
          animationDuration: "2",
          animationDelay: "1.8s",
        }}
      >
        Alguns trabalhos
      </h2>
      <div className="box-projects">
        <Box
          src={BellaHImage}
          title={"Bellah Freire"}
          id={"bella"}
          link={`${linkBellah}`}
          delay={"1.9s"}
        />
        <Box
          src={CharlesImage}
          title={"Charles Gama"}
          id={"charles"}
          link={linkCharles}
          delay={"2.1s"}
        />
        <Box
          src={CamilasImage}
          title={"Cerimonial Camila`s"}
          id={"camilas"}
          link={linkCamilas}
          delay={"2.3s"}
        />
        <Box
          src={TaynaImage}
          title={"Tayna Consultoria"}
          id={"tayna"}
          link={linkTayna}
          delay={"2.5s"}
        />
        <Box
          src={BioImage}
          title={"Codando Com Gabriel"}
          id={"bio"}
          link={linkBio}
          delay={"2.7s"}
        />
        <Box
          src={LinkImage}
          title={"Gabriel Dev"}
          id={"gabriel"}
          link={linkGabriel}
          delay={"2.9s"}
        />
      </div>
    </>
  );
};
