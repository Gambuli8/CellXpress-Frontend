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
//axios.defaults.baseURL = "https://cellxpress.onrender.com";
import Login from "./Components/Login/Login";
import DashboardAdmin from "./Views/DashboardAdmin/DashboardAdmin";
import "./App.css";
import DetailUser from "./Components/DetailUser/DetailUser";
//  axios.defaults.baseURL = "http://localhost:3002";
import { ProtectedRoute } from "./Components/ProtectedRoutes/ProtectedRoutes";
axios.defaults.baseURL = "https://cellxpress.onrender.com";
function App() {
  return (

    <>
      <CartProvider>
        <div className="App">
          <Routes>
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
          </Routes>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
