import "./Shoppingbag.css";

const ShoppingBag = ({ shoppingBag }) => {
  const nodeBagElements = shoppingBag.map((recipe) => {
    return (
      <div className="all-shoplist-display">
        <div className="shopping-bag-container">
          <div className="shopping-bag-card">
            <p>{recipe.meal.name}</p>
            <ul>
              {recipe.meal.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <br />
          </div>
        </div>
      </div>
    );
  });

  return <>{nodeBagElements}</>;
};

export default ShoppingBag;
