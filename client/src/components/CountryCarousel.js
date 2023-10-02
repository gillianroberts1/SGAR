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
import "./CountryCarousel.css";

const CountryCarousel = ({ onImageClick }) => {
  const navigate = useNavigate();

  const recipes = [
    {
      country: "Italy",
      image: italian,
      cuisine: "Italian",
    },
    {
      country: "China",
      image: chinese,
      cuisine: "Chinese",
    },
    {
      country: "Ireland",
      image: irish,
      cuisine: "Irish",
    },
    {
      country: "United States",
      image: american,
      cuisine: "American",
    },
    {
      country: "United Kingdom",
      image: english,
      cuisine: "British",
    },
    {
      country: "Thailand",
      image: thai,
      cuisine: "Thai",
    },
    {
      country: "India",
      image: indian,
      cuisine: "Indian",
    },
    {
      country: "France",
      image: french,
      cuisine: "French",
    },
    {
      country: "Mexico",
      image: mexican,
      cuisine: "Mexican",
    },
    {
      country: "Spain",
      image: spanish,
      cuisine: "Spanish",
    },
  ];
  return (
    <div className="carousel-container">
    <Carousel autoPlay={false} showIndicators={false}>
      {recipes.map(({ country, image, cuisine }) => (
        <div
          className="carousel-element"
          onClick={() => navigate(`/cuisine/${country}`)}
          key={country}
        >
          <p>{cuisine}</p>
          <img src={image} alt={country} />
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export default CountryCarousel;
