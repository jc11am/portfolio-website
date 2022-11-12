import Project from "../project/project"
import "./projectList.css"
import { Projects } from "../../data"


const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
      </div>
      <div className="pl-list">
        {Projects.map((item) => (
          <Project key={item.id} img={item.img.p} link={item.link} git={item.git} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
