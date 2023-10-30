import React, { useState } from "react";
import { postRecipe } from "../RecipeService";
import "./RecipeCreate.css";

function RecipeCreate({ addRecipe }) {
  const [formData, setFormData] = useState({
    meal: {
      favourited: false,
      name: "",
      description: "",
      image: "",
      ingredients: [],
      nutrition: {
        calories: "",
        protein: "",
        carbohydrates: "",
        fiber: "",
        sugar: "",
      },
      preparation_time: "",
      cooking_time: "",
      method: "",
      vegan: "",
      vegetarian: "",
      country_of_origin: "",
    },
  });

  const blankForm = {
    meal: {
      favourited: false,
      name: "",
      description: "",
      image: "",
      ingredients: [],
      nutrition: {
        calories: "",
        protein: "",
        carbohydrates: "",
        fiber: "",
        sugar: "",
      },
      preparation_time: "",
      cooking_time: "",
      method: "",
      vegan: "",
      vegetarian: "",
      country_of_origin: "",
    },
  };

  const onChange = (e) => {
    const newFormData = { ...formData };
    let moddedNewString = e.target.value;
    newFormData.meal[e.target.name] = moddedNewString;
    setFormData(newFormData);
  };

  const onNutritionChange = (e) => {
    const newFormData = { ...formData };
    let moddedNewString = e.target.value;
    newFormData.meal.nutrition[e.target.name] = moddedNewString;
    setFormData(newFormData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const splitIngredients = formData.meal.ingredients.split(",");
    const trimmedIngredients = splitIngredients.map((ing) => ing.trim());

    const splitMethod = formData.meal.method.split(",");
    const trimmedMethod = splitMethod.map((ing) => ing.trim());
    const modifiedData = {
      ...formData,
      meal: {
        ...formData.meal,
        ingredients: trimmedIngredients,
        method: trimmedMethod,
        vegan: formData.meal.vegan === "true" ? true : false,
        vegetarian: formData.meal.vegetarian === "true" ? true : false,
      },
    };

    postRecipe(modifiedData).then((data) => {
      console.log({ data });
      addRecipe(data);
    });
    setFormData(blankForm);

    // This part is to reset the form after adding
  };

  return (
    <div className="form-container">
    <form onSubmit={onSubmit} id="recipe-form">
      <h2> Add a Recipe</h2>
      <div className="formWrap">
        <label> Meal name: </label>
        <input
          onChange={onChange}
          type="text"
          id="name"
          name="name"
          value={formData.meal.name}
        />
      </div>
      <div className="formWrap">
        <label> Description: </label>
        <input
          onChange={onChange}
          type="text"
          id="description"
          name="description"
          value={formData.meal.description}
        />
      </div>

      <div className="formWrap">
        <label> Ingredients: </label>
        <textarea
          onChange={onChange}
          type=""
          id="ingredients"
          name="ingredients"
          value={formData.meal.ingredients}
          placeholder="eg: 1kg Mince, 2 large tomatoes, 20ml cream"
          required
        />
      </div>
      <div className="formWrap">
        <label> Nutrition: </label>
        <div className="nutrition">
          <input
            onChange={onNutritionChange}
            type="text"
            id="calories"
            name="calories"
            value={formData.meal.nutrition.calories}
            placeholder="calories"
          />
          <input
            onChange={onNutritionChange}
            type="text"
            id="carbohydrates"
            name="carbohydrates"
            value={formData.meal.nutrition.carbohydrates}
            placeholder="carbohydrates"
          />
          <input
            onChange={onNutritionChange}
            type="text"
            id="fiber"
            name="fiber"
            value={formData.meal.nutrition.fiber}
            placeholder="fibre"
          />
          <input
            onChange={onNutritionChange}
            type="text"
            id="protein"
            name="protein"
            value={formData.meal.nutrition.protein}
            placeholder="protein"
          />
          <input
            onChange={onNutritionChange}
            type="text"
            id="sugar"
            name="sugar"
            value={formData.meal.nutrition.sugar}
            placeholder="sugar"
          />
        </div>
      </div>
      <div className="formWrap">
        <label> Preparation time(mins): </label>
        <input
          onChange={onChange}
          type="text"
          id="preparation_time"
          name="preparation_time"
          value={formData.meal.preparation_time}
        />
      </div>
      <div className="formWrap">
        <label> Time to cook(mins): </label>
        <input
          onChange={onChange}
          type="text"
          id="cooking_time"
          name="cooking_time"
          value={formData.meal.cooking_time}
        />
      </div>
      <div className="formWrap">
        <label> Method: </label>
        <textarea
          onChange={onChange}
          type="text"
          id="method"
          name="method"
          value={formData.meal.method}
          placeholder="eg: boil water, peel potatoes"
          required
        />
      </div>
      <div className="formWrap">
        <label> Vegan - true/false: </label>
        <input
          onChange={onChange}
          type="text"
          id="vegan"
          name="vegan"
          value={formData.meal.vegan}
        />
      </div>
      <div className="formWrap">
        <label> Vegetarian - true/false: </label>
        <input
          onChange={onChange}
          type="text"
          id="vegetrian"
          name="vegetarian"
          value={formData.meal.vegetarian}
        />
      </div>
      <div className="formWrap">
        <label> Cuisine: </label>
        <input
          onChange={onChange}
          type="text"
          id="country_of_origin"
          name="country_of_origin"
          value={formData.meal.country_of_origin}
          placeholder="eg: Chinese, Italian"
        />
      </div>

      <input type="submit" value="save" id="save" />
    </form>
    </div>
  );
}

export default RecipeCreate;
