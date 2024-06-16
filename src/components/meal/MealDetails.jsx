import React, { useEffect, useState } from "react";
import axios from 'axios'
import classes from './MealDetails.module.css'
import { useParams  } from "react-router-dom";

const src = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const MealDetails = () => {
    const {idMeal} = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        axios
        .get(`${src}${idMeal}`) 
        .then(response => {
            setMeal(response.data.meals[0]);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, [idMeal])

    if (!meal) {
        return <p></p>;
    }

    function getIngredients(meal) {
        return Object.keys(meal)
          .filter((key) => key.startsWith("strIngredient"))
          .reduce((el, key, index) => {
            const ingredient = meal[key];
            const measure = meal["strMeasure" + (index + 1)];
            if (ingredient) {
              el.push(
                <li key={index}>
                  {ingredient} <span className={classes.measure}>{measure}</span>
                </li>
              );
            }
            return el;
          }, []);
      }

    return (
        <section className={classes.meal}>
            <div className={classes.meal__info}>
                <div className={classes.meal__info__txt}>
                    <div className={classes.meal__info_general}>
                        <p className={classes.meal__heading}></p>
                        <p className={classes.meal__name}>{meal.strMeal}</p>
                        <p>
                            <span className={classes.meal__category}>{meal.strCategory}</span> | <span className={classes.meal__area}>{meal.strArea}</span>
                        </p>
                    </div>
                    <ul className={classes.meal__ingredients}>
                       {getIngredients(meal)}
                    </ul>
                </div>
                <div className={classes.meal__media}>
                    <img className={classes.meal__img} src={meal.strMealThumb} alt='food img'/>
                </div>
            </div>

            <div className={classes.mealInstructions}>
                <p className={classes.mealInstructions__heading}>Instruction</p>
                <p className={classes.mealInstructionTxt}>{meal.strInstructions}</p>
                <button className={classes.btnYoutube}><a href={meal.strYoutube}>Watch on YouTube</a></button>
            </div>
            
        </section>
    );
}

export default MealDetails;