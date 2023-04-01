import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import {projectList} from "../helpers/ProjectList.js";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {
          projectList.map((project, index) => {
            return <ProjectItem id={index} name={project.name} image={project.image}/>
          })
        }
      </div>
    </div>
  )
}

export default Projects