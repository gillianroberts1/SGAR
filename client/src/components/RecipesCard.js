const RecipesCard = ({recipe}) => {

   console.log(recipe);
  
    return ( 

      <>
      <h1>recipe card</h1>
       <div className="recipe-card">
        <div className="recipe-card-container">
        <img className="recipe-card-image" src={recipe.meal.image} alt={recipe.meal.name}/> 
        <h3>{recipe.meal.name}</h3>
        <p>{recipe.meal.description}</p>
        <p>Preperation time: {recipe.meal.preparation_time} minutes</p>
        <p>Cooking time: {recipe.meal.cooking_time} minutes</p>
        <p>{recipe.meal.country_of_origin}</p>
        </div>
        </div>
        </>
     );
}
 
export default RecipesCard;