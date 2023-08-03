import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Swal from "sweetalert2";
import Cards_Phone from "../../Components/Cards_Phone/Cards_Phone";
import { getProduct } from "../../Redux/Actions";
import style from "./home.module.css";
import Filters from "../../Components/Filters/Filters";

const Home = () => {
  const allProduct = useSelector((state) => state.allProduct);

  const allProductsByName = useSelector((state) => state.allProductsByName);

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const handleSearchByName = (name) => {
    setSearch(name);
  };
  const handleShowAllProducts = () => {
    setSearch("");
  };

  const hadleSearch  = () => {
    if (search) {
      if (allProductsByName.length !== 0) {
       return allProductsByName
      }
      else  {
       return allProduct
      }
    }
    else {
      return allProduct
    }
  }

  return (
    <div className={style.container}>
      <Navbar onSearch={handleSearchByName} />
      <Filters/>
      <Cards_Phone
       Product={hadleSearch()}
        // Product={search ? allProductsByName : allProduct}
        onShowAllProducts={handleShowAllProducts}
      />
      <Footer />
    </div>
  );
};

export default Home;
