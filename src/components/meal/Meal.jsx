import React, { useState } from "react";
import classes from './Meal.module.css'

const Meal = ({ headingTxt, mealName, mealCategory, mealArea, mealImgUrl }) => {
    const [meal, setMeal] = useState({
        headingTxt,
        mealName,
        mealCategory,
        mealArea,
        mealImgUrl
    });

    return (
        <section className={classes.meal}>
            <div className={classes.meal__info}>
                <p className={classes.meal__heading}>{meal.headingTxt}</p>
                <a className={classes.meal__name} href="">{meal.mealName}</a>
                <p>
                    <span className={classes.meal__category}>{meal.mealCategory}</span> | <span className={classes.meal__area}>{meal.mealArea}</span>
                </p>
            </div>
            <div className={classes.meal__media}>
                <img className={classes.meal__img} src={meal.mealImgUrl} alt={meal.mealName}/>
            </div>
        </section>
    );
}

export default Meal;
