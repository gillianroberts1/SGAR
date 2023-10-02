import { Carousel } from "react-responsive-3d-carousel";
import italian from "../assets/images/italian.png";
import chinese from "../assets/images/chinese.png";
import irish from "../assets/images/irish.png";
import american from "../assets/images/american.png";
import english from "../assets/images/english.png";
import thai from "../assets/images/thai.png";
import indian from "../assets/images/indian.png";
import french from "../assets/images/french.png";
import mexican from "../assets/images/mexican.png";
import spanish from "../assets/images/spanish.png";

import { useNavigate } from "react-router-dom";
import "./CountryCarousel.css"

const CountryCarousel = ({ onImageClick }) => {
  const navigate = useNavigate();

  const recipes = [
    {
      country: "Italy",
      image: italian,
      cuisine: "italian",
    },
    {
      country: "China",
      image: chinese,
      cuisine: "chinese",
    },
    {
      country: "Ireland",
      image: irish,
      cuisine: "irish",
    },
    {
        country: "United States",
        image: american,
        cuisine: "American",
      },
      {
        country: "United Kingdom",
        image: english,
        cuisine: "british",
      },
      {
        country: "Thailand",
        image: thai,
        cuisine: "thai",
      },
      {
        country: "India",
        image: indian,
        cuisine: "indian",
      },
      {
        country: "France",
        image: french,
        cuisine: "french",
      },
      {
        country: "Mexico",
        image: mexican,
        cuisine: "french",
      },
      {
        country: "Spain",
        image: spanish,
        cuisine: "spanish",
      }
          


  ];
  return (
    <Carousel autoPlay={false}>
      {recipes.map(({ country, image }) => (
        <div
          className="carousel-element"
          onClick={() => navigate(`/cuisine/${country}`)}
          key={country}
        >
          <img src={image} alt={country} />
        </div>
      ))}
    </Carousel>
  );
};

export default CountryCarousel;
