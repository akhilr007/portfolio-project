import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import { GitHub, Language } from "@mui/icons-material";
import "../styles/ProjectDisplay.css";
import { IconButton } from "@mui/material";

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  const { name, image, skills, githubUrl, displayUrl } = project;
  return (
    <div className="project">
      <h1>{name}</h1>
      <img src={image} alt="weather-app" />
      <p>
        <b>Skills:</b>
        {skills}
      </p>
      <div>
        <IconButton aria-label="www.github.com" href={githubUrl}>
          <GitHub />
        </IconButton>
        {displayUrl !== null ? (
          <IconButton
            aria-label="www.netlify.com"
            onClick={() => window.open(displayUrl, "__blank")}
          >
            <Language />
          </IconButton>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default ProjectDisplay;
