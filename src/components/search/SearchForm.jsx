import React, { useState }from "react";
import classes from './SearchForm.module.css'
import Button from "../UI/buttons/Button";

const SearchForm = ({heading, placeholder}) => {
    const [searchAttributes, setSearchAttributes] = useState({
        heading,
        placeholder
    })

    return (
        <section className={classes.search}>
            <form className={classes.searchForm}>
                <p className={classes.searchHeading}>{searchAttributes.heading}</p>
                <div className={classes.searchField}>
                    <input className={classes.searchInput} placeholder={searchAttributes.placeholder}></input>
                    <Button btnText='Search'/>
                </div>
            </form>
        </section>
    )
}

export default SearchForm;