import MealContainer from "../meal/MealContainer";

export const SearchResultsList = ({ meals }) => {
    return (
      <div className="results-list">
        {meals.map((meal, id) => {
          return <MealContainer meal={meal} key={id} />;
        })}
      </div>
    );
  };
  