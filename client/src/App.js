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
import { updateRecipe } from "./RecipeService";
import { useState, useEffect } from "react";
import RecipesCard from "./components/RecipesCard";

function App() {
  const [recipes, setRecipes] = useState([]);
  // const [selectedRecipe, setSelectedRecipe] = useState([]);
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((allRecipes) => {
      setRecipes(allRecipes);
    });
  }, []);

  useEffect(() => {
    filterFavourites();
  }, [recipes]);

  // useEffect(() => { 
  //   removeFilterFavourites();
  // }, [ recipes ]);

  // const onRecipeSelected = (recipe) => {
  //   setSelectedRecipe(recipe);
  // };

  const filterFavourites = () => {
    const newFav = [];
    if (recipes.length > 0) {
      for (let recipe of recipes) {
        if (recipe.meal.favourited === true) {
          newFav.push(recipe);
        }
      }
    }
    setFavouriteRecipes(newFav);
  };

  // const removeFilterFavourites = () => {
  //   const newFav = [];
  //   if (recipes.length > 0) {
  //     for (let recipe of recipes) {
  //       if (recipe.meal.favourited === false) {
  //         newFav.push(recipe);
  //       }
  //     }
  //   }
  //   setFavouriteRecipes(newFav);
  // };



  const favouriteSelected = (itemToAdd) => {
    const isRecipeInFavorites = favouriteRecipes.some(
      (favRecipe) => favRecipe.meal.name === itemToAdd.meal.name
    );
    if (!isRecipeInFavorites) {
      console.log("item to add", itemToAdd);
      itemToAdd.meal.favourited = true;
      updateRecipe(itemToAdd);
      let recipesCopy = [...recipes];
      for (let rec of recipesCopy) {
        if (rec.meal._id === itemToAdd.meal._id) {
          rec.meal.favourited = true;
        }
      }
      setRecipes(recipesCopy);
      filterFavourites();
    }
  };

  // const favouriteRemoved = (itemToAdd) => {
  //   const isRecipeInFavorites = favouriteRecipes.some(
  //     (favRecipe) => favRecipe.meal.name === itemToAdd.meal.name
  //   );
  //   if (!isRecipeInFavorites) {
  //     console.log("item to add", itemToAdd);
  //     itemToAdd.meal.favourited = false;
  //     updateRecipe(itemToAdd);
  //     let recipesCopy = [...recipes];
  //     for (let rec of recipesCopy) {
  //       if (rec.meal._id === itemToAdd.meal._id) {
  //         rec.meal.favourited = false;
  //       }
  //     }
  //     setRecipes(recipesCopy);
  //     removeFilterFavourites();
  //   }
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



  


  // const removeFromFavourites = (removed) => {
  //   const updatedFaves = [];
  //   for (let recipe of favouriteRecipes) {
  //     if (recipe.meal.name !== removed.name) {
  //       updatedFaves.push(recipe);
  //     }
  //   }
  //   setFavouriteRecipes(updatedFaves);
  // };

  return (
    <Router>
      <NavBar handleSearch={handleSearch} />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/allrecipes"
            element={
              <RecipesGrid
                recipes={recipes}
                handleSearch={handleSearch}
                updateRecipe={updateRecipe}
              />
            }
          />
          <Route
            path="/:id"
            element={<RecipesCard newFavourites={favouriteSelected} />}
          />
          <Route
            path="/favourites"
            element={
              <Favourites
                favourites={favouriteRecipes}
                // favouriteRemoved={favouriteRemoved}

              />
            }
          />
          <Route path="/shoppingbag" element={<ShoppingBag />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
