import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import "../styles/Home.css";
import resume from "../assets/AzeemAijaz-Resume.pdf";



function Home() {
  return (
    <div className='home'>
        <div className='about'> 

        <div className='word'> 
            <p> Aspiring Web Developer/Software Engineer</p>
            </div>
            <h2> Hello, My Name is Azeem</h2>
            <div className='prompt'> 
            <p> Senior Computer Science Student at Virgnia Commonwealth University</p>
            
            <a href= "https://www.linkedin.com/in/azeem-aijaz-052707207/" target="blank"> 
             <LinkedInIcon />
            </a>

            <a href= "https://github.com/aijaza1" target="blank"> 
             <GitHubIcon />
            </a>

            <a href= "mailto:aijaza@vcu.edu" target="blank"> 
             <EmailIcon />
            </a>

            </div>
        </div>
        <div className='skills'>

        <div className='resume'>
        <a href = {resume} target="blank"> 
             Resume <DescriptionIcon />
        </a>
        
        </div>
            <h1> Skills</h1>
            <ol className='list'>
                <li className='item'>
                <h2>Languages: </h2>
                    <span> 
                    HTML, CSS, Javascipt, ReactJS, Python, Java, C, C++, Linux, Command Line, Terminal, Bash, Markdown
                    </span>
                </li>
                <br></br><br></br>
                <li className='item'>
                <h2>Technologies: </h2>
                    <span> 
                    VS Code, Pycharm, Wordpress, IntelliJ, Sublime, Eclipse, Github, Figma, Adobe XD, Microsoft Excel, Matlab
                    </span>
                </li>

            </ol>
        </div>
    </div>
  )
}

export default Home;