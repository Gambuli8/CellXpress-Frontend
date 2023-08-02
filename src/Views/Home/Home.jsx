import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Swal from "sweetalert2";
import Cards_Phone from "../../Components/Cards_Phone/Cards_Phone";
import { getProduct } from "../../Redux/Actions";
import style from "./home.module.css";

const Home = () => {
  const allProduct = useSelector((state) => state.allProduct);
  const allProductsByName = useSelector((state) => state.allProductsByName);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getProduct());
    setTimeout(() => {
      Swal.fire({
        title: "Bienvenido a CellXpress",
        text: "La mejor tienda de celulares",
        icon: "success",
        timer: 1000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }, 2000);
  }, []);

  const handleSearchByName = (name) => {
    setSearch(name);
  };

  return (
    <div className={style.container}>
      <Navbar onSearch={handleSearchByName} />
      <Cards_Phone Product={search ? allProductsByName : allProduct} />
      <Footer />
    </div>
  );
};

export default Home;
