import CountryCarousel from "./CountryCarousel";
import RecipesGrid from "./RecipesGrid";

const Home = ({randomRecipes}) => {
  return (
    <>
      <CountryCarousel />
      <RecipesGrid recipes={randomRecipes} showSearchBar={false}/>
    </>
  );
};

export default Home;
