import React, {useState}  from "react";
import { postRecipe } from "../RecipeService";

function RecipeCreate ({addRecipe}) {

    const [formData, setFormData] =  useState({

        meal: {
            favourited: false,
		    name: "",
		    description:"",
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
            method:"",
            vegan: "",
            vegetarian: "",
            country_of_origin: "",
        }
    })

   const blankForm = {
        meal: {
            favourited: false,
            name: "",
            description:"",
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
            method:"",
            vegan: "",
            vegetarian: "",
            country_of_origin: "",
        }
    }

    const onChange = (e) => {
        const newFormData = {...formData}
        let moddedNewString = e.target.value
        newFormData.meal[e.target.name] = moddedNewString;
        setFormData(newFormData)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        postRecipe(formData)
        .then((data) => {
            console.log({data});
            addRecipe(data);
        })
        setFormData(blankForm)

        // This part is to reset the form after adding


    }


    return (
           <form onSubmit={onSubmit} id="recipe-form">
            <h2> Add a Recipe</h2> 
            <div className="formWrap">
                <label> Meal name</label>
                <input 
                onChange={onChange}
                type="text"
                id="name"
                name="name"
                value={formData.meal.name} />
            </div>
            <div className="formWrap">
                <label> Description</label>
                <input 
                onChange={onChange}
                type="text"
                id="description"
                name="description"
                value={formData.meal.description} />
            </div>
            <div className="formWrap">
                <label> </label>
                <input 
                onChange={onChange}
                type="image"
                id="image"
                name="image"
                value={formData.meal.image} />
            </div>
            <div className="formWrap">
                <label> Ingredients?</label>
                <input 
                onChange={onChange}
                type=""
                id="ingredients"
                name="ingredients"
                value={formData.meal.ingredients} />
            </div>
            <div className="formWrap">
                <label> Nurtition </label>
                <input 
                onChange={onChange}
                type="text"
                id="nutrition"
                name="nutrition"
                value={formData.meal.nutrition} />
            </div>
            <div className="formWrap">
                <label> Preparation time? </label>
                <input 
                onChange={onChange}
                type="text"
                id="preparation_time"
                name="preparation_time"
                value={formData.meal.preparation_time} />
            </div>
            <div className="formWrap">
                <label> Time to cook?</label>
                <input 
                onChange={onChange}
                type="text"
                id="cooking_time"
                name="cooking_time"
                value={formData.meal.cooking_time} />
            </div>
            <div className="formWrap">
                <label> What are the Steps to cook the meal?</label>
                <input 
                onChange={onChange}
                type="text"
                id="method"
                name="method"
                value={formData.meal.method} />
            </div>
            <div className="formWrap">
                <label> Is the meal vegan? </label>
                <input 
                onChange={onChange}
                type="text"
                id="vegan"
                name="vegan"
                value={formData.meal.vegan} />
            </div>
            <div className="formWrap">
                <label> Is the meal vegetarian? </label>
                <input 
                onChange={onChange}
                type="text"
                id="vegetrian"
                name="vegetarian"
                value={formData.meal.vegetarian} />
            </div>
            <div className="formWrap">
                <label> Where does the meal originate from? </label>
                <input 
                onChange={onChange}
                type="text"
                id="country_of_origin"
                name="country_of_origin"
                value={formData.meal.country_of_origin} />
            </div>

            <input type="submit" value="save" id="save"/>
           </form>

        

    
)}


export default RecipeCreate