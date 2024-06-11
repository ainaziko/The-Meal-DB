import React, { useState }from "react";
import classes from './SearchForm.module.css'
import Button from "../UI/buttons/Button";


const SearchForm = ({ setMeals }) => {
    const [input, setInput] = useState('')

    const fetchData = (value) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setMeals(data.meals);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <section className={classes.search}>
            <form className={classes.searchForm}>
                <p className={classes.searchHeading}>Find your Meal</p>
                <div className={classes.searchField}>
                    <input 
                        className={classes.searchInput} 
                        placeholder="Find your meal"
                        value={input}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                    <Button btnText='Search' type="submit"/>
                </div>
            </form>
        </section>
    );
}

export default SearchForm;