import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from '@material-ui/icons/Link';
import "../styles/ProjectDisplay.css";


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />

      <a href={project.link} target="blank"> 
        <LinkIcon />
      </a>
      
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="disc">
      <p>
          <b>Description</b>
      </p>
      <h3>{project.description}</h3>

      </div>
             
    </div>
 
  );
}

export default ProjectDisplay;