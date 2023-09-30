import React, { useState, useEffect } from "react";
import { getRecipes } from "../RecipeService";
import RecipesGrid from "../components/RecipesGrid";
import RecipesCard from "../components/RecipesCard";

const MainContainer = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState([]);

  useEffect(() => {
    getRecipes().then((allRecipes) => {
      setRecipes(allRecipes);
    });
  }, []);

  //   const onRecipeSelected = (recipe) => {
  //     setSelectedRecipe(recipe)
  //   }

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  console.log(selectedRecipe);
  
  return (
    <>
      <h1>MainContainer</h1>
      <div className="recipe-container">
        {selectedRecipe.meal ? (
          <RecipesCard recipe={selectedRecipe} />
        ) : (
          <RecipesGrid
            recipes={recipes}
            handleButtonClick={handleRecipeClick}
          />
        )}
      </div>
    </>
  );
};

export default MainContainer;
