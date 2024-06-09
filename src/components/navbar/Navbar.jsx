import React from "react";
import classes from './Navbar.module.css'


const Navbar = () => {
    return (
        <nav className={classes.navbar}>
          <a href="/" className={classes.siteTitle}>The Meal</a>
        </nav>
    )
};

export default Navbar;