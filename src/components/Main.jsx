import React from "react";
import Navbar from './navbar/Navbar'
import Meal from './meal/Meal';
import SearchForm from './search/SearchForm'


const Main = () => {
    return (
       <>
        <Meal
            headingTxt={'Meal of The Day'}
            mealName={'Gołąbki'} 
            mealCategory={'Polish'} 
            mealArea={'Europe'} 
            mealImgUrl={'https://www.themealdb.com/images/media/meals/q8sp3j1593349686.jpg'}
        />
        <SearchForm
            heading={'Find your Meal'}
            placeholder={'Find your meal'}
        />
       </>
    )
}

export default Main;