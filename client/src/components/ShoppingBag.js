import "./Shoppingbag.css";

const ShoppingBag = ({ shoppingBag }) => {
  const nodeBagElements = shoppingBag.map((recipe) => {
    return (
      <div className="shopping-bag-card">
        <div className="shopping-bag-container">
          <p>{recipe.meal.name}</p>
          <ul>
            {recipe.meal.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <br />
        </div>
      </div>
    );
  });

  return <div className="shopping-bag-container">{nodeBagElements}</div>;
};

export default ShoppingBag;
