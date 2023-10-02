import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipe } from "../RecipeService";
import "./RecipeCard.css";

const RecipesCard = ({ addToFavourite, removeFromFavourite }) => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getRecipe(id).then((resp) => setRecipe(resp));
  }, [id]);

  const handleButtonClick = () => {
    console.log("item in recipeCard", recipe);
    addToFavourite(recipe);
    navigate("/favourites");
  };

  const handleRemoveClick = () => {
    removeFromFavourite(recipe);
    navigate("/favourites");
  };

  if (!recipe) return <p>loading...</p>;

  return (
    <>
      <div className="recipe-card">
        <div className="recipe-card-container">
          <img
            className="recipe-card-image"
            src={recipe.meal.image}
            alt={recipe.meal.name}
          />
          <h3>{recipe.meal.name}</h3>
          <p>{recipe.meal.description}</p>
          <p>Preperation time: {recipe.meal.preparation_time} minutes</p>
          <p>Cooking time: {recipe.meal.cooking_time} minutes</p>
          <p>{recipe.meal.country_of_origin}</p>
          {recipe.meal.favourited ? (
            <button className="fav-button" onClick={handleRemoveClick}>
              Remove From Favourites
            </button>
          ) : (
            <button className="fav-button" onClick={handleButtonClick}>
              Add to Favourites
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default RecipesCard;
