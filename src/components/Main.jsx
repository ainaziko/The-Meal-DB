import React, { useState } from "react";
import Meal from './meal/Meal';
import SearchForm from './search/SearchForm'
import { SearchResultsList } from "./search/SearchResultList";


const Main = () => {
    const [meals, setMeals] = useState([]);

    return (
       <>
        <Meal
            headingTxt={'Meal of The Day'}
            mealName={'Gołąbki'} 
            mealCategory={'Polish'} 
            mealArea={'Europe'} 
            mealImgUrl={'https://www.themealdb.com/images/media/meals/q8sp3j1593349686.jpg'}
        />
        <SearchForm setMeals={setMeals} />
            {meals && meals.length > 0 && <SearchResultsList meals={meals} 
        />}
       </>
    );
}

export default Main;