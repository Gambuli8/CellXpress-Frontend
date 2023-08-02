import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsByName, getAllProducts } from "../../Redux/Actions";
import Swal from "sweetalert2";
import style from "./searchBar.module.css";

export default function Searchbar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    if (!name.length) {
      Swal.fire({
        text: "Debes ingresar un nombre de telefono",
        icon: "error",
        confirmButtonText: "ok",
      });
    }
    dispatch(getProductsByName(name));
  };

  return (
    <div className={style.containerSearch}>
      <input
        type="search"
        onChange={(event) => handleChange(event)}
        value={name}
        placeholder="Busca un telefono"
        className={style.Searchbar}
      />
      <button
        type="submit"
        onClick={(event) => handleSubmit(event)}
        className={style.searchBtn}
      ></button>
    </div>
  );
}
