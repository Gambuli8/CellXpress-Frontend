import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByName } from "../../Redux/Actions";
import Swal from "sweetalert2";
import style from "./searchBar.module.css";

export default function Searchbar({ value, onChange, onSearch }) {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) {
      Swal.fire({
        text: "Debes ingresar un nombre de telefono",
        icon: "error",
        confirmButtonText: "ok",
      });
    }
    dispatch(getProductsByName(value));
    onSearch();
  };

  return (
    <div className={style.containerSearch}>
      <input
        type="search"
        onChange={onChange}
        value={value}
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
