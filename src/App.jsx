import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import Detail_Card from "./Components/Detail_Card/Detail_Card";
import AboutUs from "./Views/About Us/AboutUs";
import NewProduct from "./Components/NewProduct/NewProduct";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import { AuthProvider } from "./context/authContext";
import "./App.css";
axios.defaults.baseURL = "https://cellxpress.onrender.com";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detailCard/:id" element={<Detail_Card />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
