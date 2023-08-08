import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Swal from "sweetalert2";
import Cards_Phone from "../../Components/Cards_Phone/Cards_Phone";
import { getProduct, getProductsByName } from "../../Redux/Actions";
import style from "./home.module.css";
import Filters from "../../Components/Filters/Filters";
import Paginado from "../../Components/Paginado/Paginado";

const Home = () => {
  const allProduct = useSelector((state) => state.allProduct);
  const allProductsByName = useSelector((state) => state.allProductsByName);
  const [filtered, setFiltered] = useState([]);
  //Paginado
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [currentPag, setCurrentPag] = useState(1);
  const [cantPerPage, setCantPerPage] = useState(8);
  const indexLastPhone = currentPag * cantPerPage;
  const indexFirstPhone = indexLastPhone - cantPerPage;
  const currentPhone = filtered.slice(indexFirstPhone, indexLastPhone);
 

  const paginado = (pageNumber) => {
    setCurrentPag(pageNumber);
  };
  //Fin paginado

  useEffect(() => {
    if (!allProduct.length) {
      dispatch(getProduct());
    }

    setFiltered(allProduct);
  }, [dispatch, allProduct]);

  useEffect(() => {
    setFiltered(allProductsByName);
  }, [allProductsByName]);

  const handleChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getProductsByName(search));
  };

  const handleReloadProducts = () => {
    dispatch(getProduct()); // O la acción para cargar los productos
    setCurrentPag(1);
  };

  return (
    <div className={style.container}>
      <Navbar
        handleSubmit={handleSubmit}
        handlerChanges={handleChange}
        handleReloadProducts={handleReloadProducts}
      />
      <Filters />
      <Paginado
        cantPerPage={cantPerPage}
        allProducts={filtered.length}
        Paginado={paginado}
      />
      <Cards_Phone Product={currentPhone} />
      <Footer />
    </div>
  );
};
//
export default Home;
