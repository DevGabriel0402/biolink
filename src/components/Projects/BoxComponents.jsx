import "../Projects/projects.css";
import "boxicons";
import "animate.css";

export const Box = ({ src, title, id, link, delay }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };
  return (
    <div
      className="box animate__animated animate__fadeInUp"
      style={{ animationDuration: "2", animationDelay: delay }}
      onClick={handleClick}
    >
      <div className="shadow">
        <h2 className="title-box">
          {title}
          <box-icon
            size="10px"
            color="#fafafa"
            name="link-external"
            style={{ transform: "translateY(-4px)" }}
          ></box-icon>
        </h2>
      </div>
      <img id={id} width={"100%"} src={src} alt="imagem do trabalho" />
    </div>
  );
};
