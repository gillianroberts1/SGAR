import CountryCarousel from "./CountryCarousel";
import RecipesGrid from "./RecipesGrid";
import "./Home.css";

const Home = ({ randomRecipes }) => {
  const refreshPage = () => {
    window.location.reload(true);
  };

  return (
    <>
      <p className="cuisine"> What's your favourite cuisine?</p>
      <CountryCarousel />
      <p className="suggestion">Can't decide? How about one of these...</p>
      {randomRecipes.length === 0 ? (
        <button className="refresh load" onClick={refreshPage}>
          Click to load recipes
        </button>
      ) : (
        <button className="refresh more" onClick={refreshPage}>
          Suggest something else
        </button>
      )}
      <RecipesGrid recipes={randomRecipes} showSearchBar={false} />
    </>
  );
};

export default Home;
