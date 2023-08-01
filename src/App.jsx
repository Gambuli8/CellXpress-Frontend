import { Route, Routes } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import Detail_Card from "./Components/Detail_Card/Detail_Card";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";
import AboutUs from "./Views/About Us/AboutUs";
import Login from "./Components/Login/Login"
import { ClerkProvider } from "@clerk/clerk-react";
import "./App.css";



const clerkPubKey = "pk_test_c3VpdGVkLWxlbW1pbmctNDkuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!clerkPubKey) {
  throw new Error("Missing Publishable Key")
}
function App() {
  return (
    <div>
      <ClerkProvider publishableKey={clerkPubKey}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detailCard/:id" element={<Detail_Card />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
      </ClerkProvider>
    </div>
  );
}

export default App;
