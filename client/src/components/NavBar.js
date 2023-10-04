import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./NavBar.css";
// import recipe_logo3 from "../assets/images/recipe_logo3.png"

function NavBar({handleSearch}) {
  const [activeLink, setActiveLink] = useState("/");
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

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
    
    <div className="navbar-container">
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        {/* <Navbar.Brand href="/">
          <div className="logo-container">
            <img src={recipe_logo3} alt="Logo" className="default" />
          </div>
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Link>
            <Link
              to="/allrecipes"
              className={
                activeLink === "all recipes"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("all recipes")}
            >
              All Recipes
            </Link>
            <Link
              to="/favourites"
              className={
                activeLink === "favourites"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("favourites")}
            >
              Favourites
            </Link>
            <Link
              to="/shoppingbag"
              className={
                activeLink === "shopping bag"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("shopping bag")}
            >
              Shopping Bag
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  );
}

export default NavBar;
