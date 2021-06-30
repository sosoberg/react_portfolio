import React from "react";
import { Link } from 'react-router-dom';
import './style.css'
import background from '../../images/navdrawing.jpg'
const Nav = () => {
  return (
    <nav>
            <div style={{backgroundImage: background}} />
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/projects'>Projects</Link>
            <Link className='link' to='/resume'>Resume</Link>
    </nav>
  );
};

export default Nav;