import { Route, Routes } from "react-router-dom";
import axios from "axios"
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import Detail_Card from "./Components/Detail_Card/Detail_Card";
import AboutUs from "./Views/About Us/AboutUs";
axios.defaults.baseURL = "http://localhost:3002";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detailCard/:id" element={<Detail_Card />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
