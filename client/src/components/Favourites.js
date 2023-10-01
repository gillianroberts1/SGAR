import React from 'react'
import FavRecipe from './FavRecipe'




const Favourites = ({ favourites, removeFromFavourites }) => {

    const nodeElements = favourites.map((recipe, index) => {
        return <FavRecipe key = {index} recipe={recipe} removeFromFavourites={removeFromFavourites}/>
    })


    return (  

        <div className="fav-recipe">

        <ul> 
            {nodeElements}
        </ul>
        </div> 
);
}
 
export default Favourites;