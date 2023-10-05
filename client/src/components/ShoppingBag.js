import "./Shoppingbag.css";

const ShoppingBag = ({ shoppingBag }) => {
  const nodeBagElements = shoppingBag.map((recipe) => {
    return (
      <div className="shop-card">
        <p>{recipe.meal.name}</p>
        <ul>
          {recipe.meal.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    );
  });

  return <div className="shop-grid">{nodeBagElements}</div>;
};

export default ShoppingBag;
