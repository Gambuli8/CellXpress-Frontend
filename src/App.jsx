import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import Detail_Card from "./Components/Detail_Card/Detail_Card";
import AboutUs from "./Views/About Us/AboutUs";
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register";
import NewProduct from "./Components/NewProduct/NewProduct";
import { ClerkProvider } from "@clerk/clerk-react";
import "./App.css";
axios.defaults.baseURL = "http://localhost:3002";



const clerkPubKey = "pk_test_c3VpdGVkLWxlbW1pbmctNDkuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!clerkPubKey) {
  throw new Error("Missing Publishable Key")
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detailCard/:id" element={<Detail_Card />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/newproduct" element={<NewProduct />} />
      </Routes>
    </div>
  );
}

export default App;
