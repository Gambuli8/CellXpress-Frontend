import { Route, Routes } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import Detail_Card from "./Components/Detail_Card/Detail_Card";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";
import AboutUs from "./Views/About Us/AboutUs";
import "./App.css";
import { useLocation } from "react-router-dom";

function App() {
  const Location = useLocation();

  {if (Location.pathname === "/" ) { <Footer/> && <Navbar/> === false } else { <Footer/> && <Navbar/> === true}}
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detailCard/:id" element={<Detail_Card />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
