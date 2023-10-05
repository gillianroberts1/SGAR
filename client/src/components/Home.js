import CountryCarousel from "./CountryCarousel";
import RecipesGrid from "./RecipesGrid";
import "./Home.css";

const Home = ({ randomRecipes }) => {
  return (
    <>
      <p className="cuisine"> What's your favourite cuisine?</p>
      <CountryCarousel />
      <p className="suggestion">Can't decide? How about one of these...</p>
      <RecipesGrid recipes={randomRecipes} showSearchBar={false} />
    </>
  );
};

export default Home;
