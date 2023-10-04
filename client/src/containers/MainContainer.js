// import React, { useState, useEffect } from "react";
// import { getRecipes } from "../RecipeService";
// import RecipesGrid from "../components/RecipesGrid";
// import RecipesCard from "../components/RecipesCard";
// import NavBar from "../components/NavBar";
// import "bootstrap/dist/css/bootstrap.min.css"

// const MainContainer = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [selectedRecipe, setSelectedRecipe] = useState([]);

//   useEffect(() => {
//     getRecipes().then((allRecipes) => {
//       setRecipes(allRecipes);
//     });
//   }, []);

//   //   const onRecipeSelected = (recipe) => {
//   //     setSelectedRecipe(recipe)
//   //   }

//   const handleRecipeClick = (recipe) => {
//     setSelectedRecipe(recipe);
//   };

//   return (
//     <>
        

//       <div className="recipe-container">
//         {selectedRecipe.meal ? (
//           <RecipesCard recipe={selectedRecipe} />
//         ) : (
//           <RecipesGrid
//             recipes={recipes}
//             handleButtonClick={handleRecipeClick}
//           />
//         )}
//       </div>
//     </>
//   );
// };

// export default MainContainer;
