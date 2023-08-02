import { NavLink } from "react-router-dom";
import style from "./navBar.module.css";
import Searchbar from "../SearchBar/SearchBar";
import { useState } from "react";

export default function Navbar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <nav className={style.navContainer}>
      <div>
        <NavLink to="/home" className={style.link}>
          <h1 className={style.logo}>CellXpress</h1>
        </NavLink>
      </div>
      <div>
        <Searchbar
          value={searchValue}
          onChange={handleChange}
          onSearch={handleSearch}
        />
      </div>
      <div className={style.linkContainer}>
        <NavLink to="/home" className={style.link}>
          Inicio
        </NavLink>
        <NavLink to="/aboutus" className={style.link}>
          Sobre Nosotros
        </NavLink>
        <NavLink className={style.link}>Registrarse</NavLink>
        <NavLink className={style.link}>Ingresar</NavLink>
      </div>
    </nav>
  );
}
