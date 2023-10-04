import "./RecipesGrid.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaHeart, FaRegHeart } from "react-icons/fa";

// make the description on grid not too long
const description_length = 100;

const RecipesGrid = ({ recipes, handleSearch, showSearchBar = true }) => {
  // sorts into alphabetical order
  recipes.sort((a, b) => a.meal.name.localeCompare(b.meal.name));

  return (
    <>
      {showSearchBar && <SearchBar handleSearch={handleSearch} />}
    <div className="recipies-grid">
      <div className="all-recipes-container">
        {recipes &&
          recipes.map((recipe) => (
            <Link
              to={`/${recipe._id}`}
              className="recipe-card"
              key={recipe._id}
            >
              <div className="fav-hearts">
                {recipe.meal.favourited === true ? (
                  <span>
                    <FaHeart />
                  </span>
                ) : (
                  <span>
                    <FaRegHeart />
                  </span>
                )}
              </div>

              <img
                className="small-img"
                src={recipe.meal.image}
                alt={recipe.meal.name}
              />
              <div></div>
              <p className="recipe-name">{recipe.meal.name}</p>
              <p className="recipe-description">
                {recipe.meal.description.length > description_length
                  ? `${recipe.meal.description.slice(0, description_length)}...`
                  : recipe.meal.description}
              </p>
              <p className="recipe-cooktime">
                {recipe.meal.cooking_time + recipe.meal.preparation_time} mins
              </p>
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
    </div>
  );
};

export default RecipesGrid;
