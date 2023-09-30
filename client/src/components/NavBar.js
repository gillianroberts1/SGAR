import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <div className="logo-container">
            <img src="#" alt="Logo" className="default"/>
            </div>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("home")}>       
            </Nav.Link>
            <Nav.Link href="all recipes" className={activeLink === "all recipes" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("all recipes")}>       
            </Nav.Link>
            <Nav.Link href="favourites" className={activeLink === "favourites" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("favourites")}>       
            </Nav.Link>
            <Nav.Link href="shopping bag" className={activeLink === "shopping bag" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("shopping bag")}>       
            </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}

export default NavBar;
