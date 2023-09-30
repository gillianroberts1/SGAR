import "./App.css";
// import MainContainer from "./containers/MainContainer";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites";
import ShoppingBag from "./components/ShoppingBag";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import RecipesGrid from "./components/RecipesGrid";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allrecipes" element={<RecipesGrid />} />
          <Route path="/selectedrecipe" element={<RecipesCard />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/shoppingbag" element={<ShoppingBag />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      {/* <MainContainer /> */}
    </>
  );
}

export default App;
