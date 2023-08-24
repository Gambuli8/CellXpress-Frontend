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
import OrderBuy from "./Components/OrderBuy/OrderBuy";
import "./App.css";
import DetailUser from "./Components/DetailUser/DetailUser";
// axios.defaults.baseURL = "http://localhost:3002"
import { ProtectedRoute } from "./Components/ProtectedRoutes/ProtectedRoutes";
import Banned from "./Components/ProtectedRoutes/banned";


// axios.defaults.baseURL = "https://cellxpress.onrender.com";
function App() {
  // window.addEventListener('popstate', function (e) {
  //   //  window.location.assign("https://pf-cell-xpress-frontend.vercel.app/home")
  // });

  return (
    
    <>
       <CartProvider>
        <div className="App">        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detailCard/:id" element={<ProtectedRoute><Detail_Card /></ProtectedRoute>} />
            <Route path="/aboutus" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
            <Route path="/newproduct" element={<ProtectedRoute><NewProduct /></ProtectedRoute>} />
            <Route path="/register" element={<Register />} />
            <Route path="/carrito" element={<ProtectedRoute><DetailCarrito /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/admin" element={<DashboardAdmin />} /> */}
            <Route path="/editproduct/:id" element={<ProtectedRoute><EditProduct /></ProtectedRoute>} />
            <Route path="/user/:id" element={<DetailUser />} />
            <Route path="/admin" element={<ProtectedRoute><DashboardAdmin /></ProtectedRoute>}/>
            <Route path="/banned" element={<Banned/>}/>
          </Routes>
        </div> 
      </CartProvider>
    </>
      
    )
      }


export default App;
