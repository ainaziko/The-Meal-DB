import React, { useEffect, useState } from "react";
import axios from 'axios'
import classes from './Meal.module.css'
import { Link } from 'react-router-dom'
const src  = 'https://www.themealdb.com/api/json/v1/1/random.php';
  

const Meal = ({ headingTxt }) => {
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        axios
        .get(src) 
        .then(response => {
            setMeal(response.data.meals[0]);
            console.log(response.data.meals[0]);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, [])
 
    if (!meal) {
        return <p>Loading...</p>;
    }
    
    return (
        <section className={classes.meal}>
            <div className={classes.meal__info}>
                <p className={classes.meal__heading}>{headingTxt}</p>
                <Link className={classes.meal__name} key={meal.mealId} to={'/${meal.mealId}'}>{meal.strMeal}</Link>
                <p>
                    <span className={classes.meal__category}>{meal.strCategory}</span> | <span className={classes.meal__area}>{meal.strArea}</span>
                </p>
            </div>
            <div className={classes.meal__media}>
                <img className={classes.meal__img} src={meal.strMealThumb} alt={meal.strMeal}/>
            </div>
        </section>
    );
}

export default Meal;

