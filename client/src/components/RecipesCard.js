import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../RecipeService";
import "./RecipeCard.css"


const RecipesCard = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getRecipe(id).then((resp) => setRecipe(resp));
  }, [id]);

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
        </div>
      </div>
    </>
  );
};

export default RecipesCard;
