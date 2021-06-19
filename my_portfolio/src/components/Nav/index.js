import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/projects'>Projects</Link>
    </nav>
  );
};

export default Nav;