import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites";
import ShoppingBag from "./components/ShoppingBag";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import RecipesGrid from "./components/RecipesGrid";
import { getRecipes } from "./RecipeService";
import { useState, useEffect } from "react";
import RecipesCard from "./components/RecipesCard";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState([]);
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((allRecipes) => {
      setRecipes(allRecipes);
    });
  }, []);

  // const onRecipeSelected = (recipe) => {
  //   setSelectedRecipe(recipe);
  // };

  const handleSearch = (input) => {
    const results = recipes.filter((recipe) => {
      const lowerInput = input.toLowerCase();

      return (
        recipe.meal.name.toLowerCase().includes(lowerInput) ||
        recipe.meal.description.toLowerCase().includes(lowerInput) ||
        recipe.meal.country_of_origin.toLowerCase().includes(lowerInput) 
      );
    });
    setRecipes(results);
  };

  // const favouriteSelected = (itemToAdd) => {
  //   const newFavourites = [...favouriteRecipes, itemToAdd];
  //   setFavouriteRecipes(newFavourites);
  // }
  const favouriteSelected = (recipe) => {
  // Check if the recipe is already in favorites
  const isRecipeInFavorites = favouriteRecipes.some((favRecipe) => favRecipe.meal.name === recipe.meal.name);
  if (!isRecipeInFavorites) {
    // If the recipe is not in favorites, add it
    const newFavourites = [...favouriteRecipes, recipe];
    setFavouriteRecipes(newFavourites);
  } else {
    // If the recipe is already in favorites, you can choose to show a message or handle it differently
    console.log("Recipe is already in favorites.");
  }
}

  const removeFromFavourites = (removed) => {
    const updatedFaves = []
    for(let recipe of favouriteRecipes){
      if(recipe.meal.name != removed.name){
        updatedFaves.push(recipe)
      }
    }
    setFavouriteRecipes(updatedFaves)
  }

  return (
    <Router>
      <NavBar handleSearch={handleSearch} />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/allrecipes"
            element={
              <RecipesGrid recipes={recipes} handleSearch={handleSearch} />
            }
          />
          <Route path="/:id" element={<RecipesCard newFavourites={favouriteSelected} />} />
          <Route path="/favourites" element={<Favourites favourites={favouriteRecipes} removeFromFavourites={removeFromFavourites}/>} />
          <Route path="/shoppingbag" element={<ShoppingBag />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
