import React from "react";
import { Link } from 'react-router-dom';
import './style.css'

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawers from "../Drawer"

const Nav = () => {
    const [state, setState] = React.useState(false);

    const handleOpen = () => {
      setState(true);
    };
    const handleDrawerClose = () => {
      setState(false);
    };
    
  return (
    <nav>
          <div className='navbar'>
            <Link className='link' to='/react_portfolio'>Home</Link>
            <Link className='link' to='/react_portfolio/projects'>Projects</Link>
            <Link className='link' to='/react_portfolio/resume'>Resume</Link>
            <Link className='link' to='/react_portfolio/contact'>Contact</Link>
          </div>
            <div className='drawer'>
              <Drawers open={state} handleClose={handleDrawerClose} />
                <IconButton
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleOpen}
                >
                  <MenuIcon style={{ color: "white" }} />
                </IconButton>
            </div>
    </nav>
  );
};

export default Nav;