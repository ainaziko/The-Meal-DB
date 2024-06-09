import './styles/reset.css'
import './styles/index.css';
import Navbar from './components/navbar/Navbar'
import Meal from './components/meal/Meal';
import MealDetails from './components/meal/MealDetails'
import SearchForm from './components/search/SearchForm'

function App() {
  return (
    <div className="app">
      <Navbar/>
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
      <MealDetails/>
    </div>
  );
}

export default App;
