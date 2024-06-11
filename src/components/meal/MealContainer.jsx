import React from "react";
import classes from './Meal.module.css'
import { Link } from 'react-router-dom'

const MealContainer = ({ meal }) => {
    return (
        <section className={classes.meal}>
            <div className={classes.meal__info}>
                <Link className={classes.meal__name} key={meal.idMeal} to={`/meal/${meal.idMeal}`}>{meal.strMeal}</Link>
                <p>
                    <span className={classes.meal__category}>{meal.strCategory}</span> | <span className={classes.meal__area}>{meal.strArea}</span>
                </p>
            </div>
            <div className={classes.meal__media}>
                <img className={classes.meal__img} src={meal.strMealThumb} alt={meal.strMeal}/>
            </div>
        </section>
    )
}


export default MealContainer;