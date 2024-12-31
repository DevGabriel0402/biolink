import "boxicons";
import "animate.css";
import "./skills.css";

export const Skills = () => {
  return (
    <div
      className="box-skills animate__animated animate__fadeInUp"
      style={{ animationDuration: "2", animationDelay: "1.5s" }}
    >
      <h2>HardSkills</h2>
      <div className="skills">
        <box-icon type="logo" name="html5" color="#fafafa"></box-icon>
        <box-icon type="logo" name="css3" color="#fafafa"></box-icon>
        <box-icon type="logo" name="javascript" color="#fafafa"></box-icon>
        <box-icon type="logo" name="react" color="#fafafa"></box-icon>
        <box-icon type="logo" name="sass" color="#fafafa"></box-icon>
        <box-icon type="logo" name="github" color="#fafafa"></box-icon>
        <box-icon type="logo" name="wordpress" color="#fafafa"></box-icon>
        <box-icon type="logo" name="wix" color="#fafafa"></box-icon>
        <box-icon type="logo" name="figma" color="#fafafa"></box-icon>
        <box-icon type="logo" name="adobe" color="#fafafa"></box-icon>
      </div>
    </div>
  );
};
