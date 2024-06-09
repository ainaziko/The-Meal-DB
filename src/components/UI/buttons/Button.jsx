import React from "react";
import classes from './Button.module.css'

const Button = ({btnText}) => {
    return (
        <button className={classes.searchButton}>{btnText}</button>
    )
}

export default Button;