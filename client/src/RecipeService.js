const baseURL = "http://localhost:9000/api/recipes";

export const getRecipes = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const getRecipe = (id) => {
  return fetch(`${baseURL}/${id}`).then((res) => res.json());
};

export const updateRecipe = (recipe) => {
  console.log("update recipe", recipe);
  let updatedRecipe = { ...recipe };
  delete updatedRecipe._id;

  return fetch(baseURL + "/" + recipe._id, {
    method: "PUT",
    body: JSON.stringify(updatedRecipe),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const postRecipe = (payload) => {
  return fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type' : 'application/json'}
  })
  .then((res) => {
    return res.json()
  })
}

// export const deleteFavourite = (id) => {
//   return fetch(baseURL + id, {
//       method: 'DELETE'
//   })
// }
