import "../styles/header.css";
import "boxicons";
import Musica from "../assets/music/Unção Pelo Ar.webm";
import imagemPerfil from "../assets/imagens/Gabriel.webp";

export const Header = () => {
  const audio = new Audio(Musica);
  audio.currentTime = 76;

  const imageDisco = "https://i.ytimg.com/vi/ph6AKyAletI/maxresdefault.jpg";

  const tocarDisco = () => {
    const tocaDisco = document.getElementById("disco");
    tocaDisco.classList.toggle("disco-ativo");

    const DiscoAtivo = tocaDisco.classList.contains("disco-ativo");

    if (DiscoAtivo) {
      audio.play();
      document.getElementById("capa").style.transform = "translateX(4px)";
      document.getElementById("pauseMusic").style.transform = "translateX(4px)";
      document.getElementById("playMusic").style.transform = "translateX(4px)";
      document.getElementById("pauseMusic").classList.remove("hidden");
      document.getElementById("playMusic").classList.add("hidden");
      document.getElementById("pauseMusic").style.opacity = 0.5;
      document.getElementById("playMusic").style.opacity = 0;
      document.querySelector(".disco").style.animation =
        "Spin 1s linear infinite";
    } else {
      tocaDisco.style.animation = "MoveDown .5s forwards";
      audio.pause();
      document.getElementById("capa").style.transform = "translateX(0px)";
      document.getElementById("playMusic").style.transform = "translateX(2px)";
      document.getElementById("pauseMusic").classList.add("hidden");
      document.getElementById("playMusic").classList.remove("hidden");
      document.getElementById("playMusic").style.opacity = 1;
      document.getElementById("pauseMusic").style.opacity = 0;
    }
  };

  return (
    <div className="box-header">
      <div className="info">
        <img
          className="imagePerfil"
          width={40}
          height={40}
          src={imagemPerfil}
          alt="imagem de Perfil"
        />
        <div className="info-name">
          <h2>Gabriel Lucas</h2>
          <p>Desenvolvedor Web</p>
        </div>
      </div>

      <div className="tocaDisco" onClick={tocarDisco}>
        <box-icon
          size="md"
          color="#fafafa"
          name="play"
          id="playMusic"
        ></box-icon>
        <box-icon
          size="md"
          color="#fafafa"
          name="pause"
          className="hidden"
          id="pauseMusic"
        ></box-icon>
        <img
          id="capa"
          width={40}
          height={40}
          className="capa"
          src={imageDisco}
          alt="capa"
        />
        <div id="disco">
          <img
            className="imageDisco"
            width={14}
            height={14}
            src={imageDisco}
            alt="imgagem do disco"
          />
          <img
            width={40}
            height={40}
            className="disco"
            src="https://cdn.pixabay.com/photo/2012/04/13/13/23/disc-32390_640.png"
            alt="disco"
          />
        </div>
      </div>
    </div>
  );
};
