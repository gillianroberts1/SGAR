import { useEffect, useState } from "react";
import recipe_logo4 from "../assets/images/recipe_logo4.png";
import "./Header.css";
import NavBar from "./NavBar";

const Header = (handleSearch) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(scrolled);
  return (
    <>
      <div className={scrolled ? "header__scrolled" : "header"}>
        <a href="/">
          <img src={recipe_logo4} alt="Logo" className="header-image" />
        </a>
      </div>
      <NavBar handleSearch={handleSearch} />
    </>
  );
};

export default Header;
