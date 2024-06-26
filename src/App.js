import './styles/reset.css'
import './styles/index.css';
import Navbar from './components/navbar/Navbar'
import Meal from './components/meal/Meal';
import MealDetails from './components/meal/MealDetails'
import SearchForm from './components/search/SearchForm'
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import Main from './components/Main'

function App() {
  return (
    <div className="app">

      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/meal/:idMeal' element={<MealDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
