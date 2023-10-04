import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipe } from "../RecipeService";
import "./RecipeCard.css";

const RecipesCard = ({ addToFavourite, removeFromFavourite, addToShoppingBag, removeFromShoppingBag }) => {
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

  // shopping bag
  const handleButtonBagClick = () => {
    console.log("item in shopping bag", recipe);
    addToShoppingBag(recipe);
    navigate("/shoppingbag");
  };

  // shopping bag
  const handleRemoveBagClick = () => {
    removeFromShoppingBag(recipe);
    navigate("/shoppingbag");
  };

  if (!recipe) return <p>loading...</p>;

  return (
    <>
      <div className="recipe-card">
        <div className="recipe-card-container">
          {recipe.meal.favourited ? (
            <button className="fav-button" onClick={handleRemoveClick}>
              Remove From Favourites
            </button>
          ) : (
            <button className="fav-button" onClick={handleButtonClick}>
              Add to Favourites
            </button>
          )}
          {/* add to shopping bag button */}
          {recipe.meal.in_shopping_bag ? (
            <button className="bag-button" onClick={handleRemoveBagClick}>
              Remove From Shopping Bag
            </button>
          ) : (
            <button className="bag-button" onClick={handleButtonBagClick}>
              Add to Shopping Bag
            </button>
          )}
          {/*  */}
          <br></br>
          <img
            className="recipe-card-image"
            src={recipe.meal.image}
            alt={recipe.meal.name}
          />

          <h3>{recipe.meal.name}</h3>
          <p>{recipe.meal.description}</p>
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
            {recipe.meal.vegan ? <span>&#10003;</span> : <span>&#10008;</span>}
          </p>
          <p>Preperation time: {recipe.meal.preparation_time} minutes</p>
          <p>Cooking time: {recipe.meal.cooking_time} minutes</p>
          <p>Country of origin: {recipe.meal.country_of_origin}</p>
          <p>
            Nutrition:{""}
            {Object.entries(recipe.meal.nutrition).map(([name, nutrition]) => (
              <li className="nutrition" key={name}>
                {name}: {nutrition}
              </li>
            ))}
          </p>
          <p>
            Ingredients:{" "}
            {Object.entries(recipe.meal.ingredients).map(
              ([name, ingredients]) => (
                <li className="ingredients" key={name}>
                  {ingredients}
                </li>
              )
            )}
          </p>
          <p>
            Instructions:{" "}
            {Object.entries(recipe.meal.method).map(([name, method]) => (
              <li className="method" key={name}>
                {method}
              </li>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default RecipesCard;
