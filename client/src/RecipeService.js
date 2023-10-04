const baseURL = "http://localhost:9000/api/recipes"

export const getRecipes = () => {
    return fetch(baseURL)
    .then(res => res.json())
}