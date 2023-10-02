import "./RecipesGrid.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const RecipesGrid = ({ recipes, handleSearch }) => {
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <div className="all-recipes-container">
        {recipes &&
          recipes.map((recipe) => (
            <Link
              to={`/${recipe._id}`}
              className="recipe-card"
              key={recipe._id}
            >
              <img
                className="small-img"
                src={recipe.meal.image}
                alt={recipe.meal.name}
              />
              <div></div>
              <p className="recipe-name">{recipe.meal.name}</p>
              <p className="recipe-description"> {recipe.meal.description}</p>
              <p className="recipe-cooktime">{recipe.meal.cooking_time} mins</p>
              <p>
                Vegetarian:{" "}
                {recipe.meal.vegetarian ? (
                  <span>&#10003;</span>
                ) : (
                  <span>&#10008;</span>
                )}
              </p>
              <p>
                Vegan:{" "}
                {recipe.meal.vegan ? (
                  <span>&#10003;</span>
                ) : (
                  <span>&#10008;</span>
                )}
              </p>
              <p className="recipe-country">{recipe.meal.country_of_origin}</p>
            </Link>
          ))}
      </div>
    </>
  );
};

export default RecipesGrid;
