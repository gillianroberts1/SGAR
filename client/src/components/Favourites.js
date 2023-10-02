import React from "react";
import FavRecipe from "./FavRecipe";
import { Link } from "react-router-dom";
import {  updateRecipe } from "../RecipeService";

const Favourites = ({ favourites, favouriteRemoved }) => {

    const handleDelete = () => {
        updateRecipe(FavRecipe._id).then(() => {
          favouriteRemoved(FavRecipe._id)
        })

      }
    
  const nodeElements = favourites.map((recipe) => {
    return (
      <Link to={`/${recipe._id}`} className="recipe-card" key={recipe._id}>
        <img
          className="small-img"
          src={recipe.meal.image}
          alt={recipe.meal.name}
        />
        <div></div>
        <p className="recipe-name">{recipe.meal.name}</p>
        <p className="recipe-description"> {recipe.meal.description}</p>
        <p className="recipe-cooktime">{recipe.meal.cooking_time} mins</p>
        <p className="recipe-country">{recipe.meal.country_of_origin}</p>
        <button onClick={handleDelete}>🗑</button>

      </Link>
      
    );
  });
  //   for (let recipe of favourites) {
  //     if (recipe.meal.favourited === true) {
  //       nodeElements.push(recipe);
  //     }
  //   }

  return <div className="fav-recipe">{<ul>{nodeElements}</ul>}</div>;
};

export default Favourites;
