const baseURL = "http://localhost:9000/api/recipes";

export const getRecipes = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const getRecipe = (id) => {
  return fetch(`${baseURL}/${id}`).then((res) => res.json());
};


