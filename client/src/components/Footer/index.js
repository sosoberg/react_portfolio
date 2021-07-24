import React from 'react';

import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import './style.css'

const Footer = () => {
    return (
        <section className='footer'>
            <p>Samuel C Oberg</p>
            <IconButton className='iconFooter' href="https://github.com/sosoberg" target="_Blank">
              <GitHubIcon style={{color: "black"}} />
            </IconButton>
            <IconButton className='iconFooter' href="https://www.linkedin.com/in/samuel-oberg-00b228110/" target="_Blank">
              <LinkedInIcon style={{color: "black"}} />
            </IconButton>
            <IconButton className='iconFooter' href="#top">
              <ArrowUpwardIcon style={{color: "black"}} />
            </IconButton>
        </section>
    )
}

export default Footer