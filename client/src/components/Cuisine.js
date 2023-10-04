import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipesForCountry } from "../RecipeService";
import RecipesGrid from "./RecipesGrid";

const Cuisine = () => {
  const params = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipesForCountry(params.cuisine).then((res) => setRecipes(res));
  }, []);
  return (
    <>
      <h1>Cuisine</h1>
      <RecipesGrid recipes={recipes} showSearchBar={false} />
    </>
  );
};

export default Cuisine;
