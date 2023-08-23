/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import Detail_Card from "./Components/Detail_Card/Detail_Card";
import AboutUs from "./Views/About Us/AboutUs";
import NewProduct from "./Components/NewProduct/NewProduct";
import Register from "./Components/Register/Register";
import DetailCarrito from "./Components/detailCarrito/detailCarrito";
import EditProduct from "./Components/EditProduct/EditProduct";
import "./App.css";
import { CartProvider } from "./Components/Context/CartContext";
import Login from "./Components/Login/Login";
import DashboardAdmin from "./Views/DashboardAdmin/DashboardAdmin";
import "./App.css";
import DetailUser from "./Components/DetailUser/DetailUser";
// axios.defaults.baseURL = "http://localhost:3002"
import { ProtectedRoute } from "./Components/ProtectedRoutes/ProtectedRoutes";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../src/Redux/Actions";
import { useEffect, useState } from "react";
import { useAuth } from "./context/authContext";
//BACK
// axios.defaults.baseURL = "https://cellxpress.onrender.com";
function App() {
  // window.addEventListener('popstate', function (e) {
  //   //  window.location.assign("https://pf-cell-xpress-frontend.vercel.app/home")
  // });

  const allUser = useSelector((state)=> state.allUsers)
  const {user, loading}= useAuth();
  const adminUsers = user && allUser.find((adminUser) => adminUser.email === user.email);

const dispatch =useDispatch()
useEffect(()=>{
  dispatch(getUsers())
},[])




  return (
    
    <>
       <CartProvider>
        <div className="App">
  { adminUsers?.isActive ? (         <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detailCard/:id" element={<Detail_Card />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/newproduct" element={<NewProduct />} />
            <Route path="/register" element={<Register />} />
            <Route path="/carrito" element={<DetailCarrito />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/admin" element={<DashboardAdmin />} /> */}
            <Route path="/editproduct/:id" element={<EditProduct />} />
            <Route path="/user/:id" element={<DetailUser />} />
            <Route path="/admin" element={<ProtectedRoute><DashboardAdmin /></ProtectedRoute>}/>
          </Routes>):(<h1>Por politicas de la pagina hemos Restringido su acceso</h1>)}
        </div> 
      </CartProvider>
    </>
      
    )
      };


export default App;
