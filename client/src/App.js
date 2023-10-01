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
import SearchBar from "./components/SearchBar";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState([]);

  useEffect(() => {
    getRecipes().then((allRecipes) => {
      setRecipes(allRecipes);
    });
  }, []);

  const onRecipeSelected = (recipe) => {
    setSelectedRecipe(recipe);
  };

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
          <Route path="/:id" element={<RecipesCard />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/shoppingbag" element={<ShoppingBag />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
