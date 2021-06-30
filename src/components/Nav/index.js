import React from "react";
import { Link } from 'react-router-dom';
import './style.css'

const Nav = () => {
  return (
    <nav>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/resume'>Projects</Link>
    </nav>
  );
};

export default Nav;