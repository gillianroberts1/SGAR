import React from "react";
import { Link } from "react-router-dom";
import './Favourites.css'

const Favourites = ({ favourites }) => {
  //   const handleDelete = () => {
  //     updateRecipe(FavRecipe._id).then(() => {
  //       favouriteRemoved(FavRecipe._id);
  //     });
  //   };

  const nodeElements = favourites.map((recipe) => {
    return (
      <div className="favourites-grid">
      <Link to={`/${recipe._id}`} className="recipe-card" key={recipe._id}>
        <div className="fav-recipe-card">
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
        {/* <button onClick={handleDelete}>🗑</button> */}
        </div>
      </Link>
      </div>
    );
  });
  //   for (let recipe of favourites) {
  //     if (recipe.meal.favourited === true) {
  //       nodeElements.push(recipe);
  //     }
  //   }

  return <div className="fav-recipe-container">{<ul>{nodeElements}</ul>}</div>;
};

export default Favourites;
