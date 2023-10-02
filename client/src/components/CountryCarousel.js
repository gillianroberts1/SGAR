import { Carousel } from "react-responsive-3d-carousel";
import italian from "../assets/images/italian.png";
import chinese from "../assets/images/chinese.png";
import irish from "../assets/images/irish.png";
import { useNavigate } from "react-router-dom";

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
