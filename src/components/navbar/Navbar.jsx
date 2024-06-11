import React from "react";
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className={classes.navbar}>
          <Link className={classes.siteTitle} to={'/'}>The Meal</Link>
        </nav>
    )
};

export default Navbar;