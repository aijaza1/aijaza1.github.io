import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
    <div className='socialMedia'> 
    
    <a href= "https://www.linkedin.com/in/azeem-aijaz-052707207/" target="blank"> 
             <LinkedInIcon />
            </a>

            <a href= "https://github.com/aijaza1" target="blank"> 
             <GitHubIcon />
            </a>

            <a href= "mailto:aijaza@vcu.edu'" target="blank"> 
             <EmailIcon />
            </a>

    </div>
    <p> &copy; 2022 azeemaijaz.com</p>
    </div>
  )
}

export default Footer;