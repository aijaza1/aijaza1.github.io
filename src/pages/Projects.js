import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="title">
      <h1> My Projects</h1>
      </div>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>

      <br></br>

      <div className="title">
      <h1>Other Coding Projects:</h1>
      </div>

      <br></br><br></br>

      <div className="coding">
      <h2>
      <b>Password Cracker - School Group Project</b>
      </h2>
      <ul>
        <li>As a team, we created a program that tried to find encrypted password through brute force.</li>
        <li>Initially checks a list of common passwords, then tries to guess the password until it is found.</li>
        <li>Tools Used: Python, Pycharm</li>
      </ul>
      <a href="https://github.com/aijaza1/PasswordCracker" target="blank"> 
        <GitHubIcon />
      </a>

      <br></br><br></br><br></br><br></br><br></br>
      <h2>
      <b>Translator/Tax Calculator - School Group Project</b>
      </h2>
      <ul>
        <li>As a team, we created a basic website to be able to translate certain words to different languages, and find how much state and federal tax money owed.</li>
        <li>Used GitHub to upload commits as a team, uploaded a Story Board, IPO Charts, UML Diagrams, and a High Level Architecture Diagram, along with multiple program files working together.</li>
        <li>Tools Used: GitHub, IntelliJ, Java, Google Docs, Figma</li>
      </ul>
      <a href="https://github.com/VCU-CMSC-355/Spring-2021-Team-09" target="blank"> 
        <GitHubIcon />
      </a>

      <br></br><br></br><br></br><br></br><br></br>

      <h2>
      <b>Shared Memory with Process Synchronization</b>
      </h2>
      <ul>
        <li>Three seperate programs communiating with each other using shared memory.</li>
        <li>Write an integer and string to shared memory, and the other two processes wait until it is their turn to write to the shared memory via polling.</li>
        <li>Tools Used: C, Command Line Coding, Linux, Bash</li>
      </ul>
      <a href="https://github.com/aijaza1/processsync" target="blank"> 
        <GitHubIcon size={100}/>
      </a>
      
      <br></br><br></br><br></br><br></br><br></br>

      <h2>
      <b>Inbox Sort</b>
      </h2>
      <ul>
        <li>Coded a program to be able to do multiple commands.</li>
        <li>Read inbox of emails, sort by id, sort by sender, search by specific keywords, or delete emails.</li>
        <li>Tools Used: C, Command Line Coding, Linux, Bash</li>
      </ul>
      <a href="https://github.com/aijaza1/Inbox-Sort" target="blank"> 
        <GitHubIcon />
      </a>
      
      
    </div>
    </div>
  );
}

export default Projects;