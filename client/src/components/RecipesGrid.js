import "./RecipesGrid.css"


const RecipesGrid = ({ recipes, handleButtonClick }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((allRecipes) => {
      setRecipes(allRecipes);
    });
  }, []);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);

  return (
    <div className="all-recipes-container">
      {recipes &&
        recipes.map((recipe) => (
          <button
            className="recipe-card"
            onClick={() => handleButtonClick(recipe)}
            key={recipe._id}
          >
            <img
              className="small-img"
              src={recipe.meal.image}
              alt={recipe.meal.name}
            />
            <p className="recipe-name">{recipe.meal.name}</p>
            <p className="recipe-description"> {recipe.meal.description}</p>
            <p className="recipe-cooktime">{recipe.meal.cooking_time} mins</p>
            <p className="recipe-country">{recipe.meal.country_of_origin}</p>
          </button>
        ))}
    </div>
  );
};

export default RecipesGrid;
