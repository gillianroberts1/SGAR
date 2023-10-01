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

  useEffect(() => {
    getRecipes().then((allRecipes) => {
      setRecipes(allRecipes);
    });
  }, []);

  

  return (
    <Router>
      <NavBar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/allrecipes"
            element={<RecipesGrid recipes={recipes} />}
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
