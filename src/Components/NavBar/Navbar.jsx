/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import style from "./navBar.module.css";
import Searchbar from "../SearchBar/SearchBar";
import Carrito from "../Carrito/Carrito";

export default function Navbar({
  handleSubmit,
  handlerChanges,
  handleReloadProducts,
}) {
  return (
    <nav className={style.navContainer}>
      <div>
        <NavLink
          to="/home"
          className={style.titleLogo}
          onClick={handleReloadProducts}
        >
          <h1 className={style.logo}>CellXpress</h1>
        </NavLink>
      </div>
      <div>
        <Searchbar
          handleSubmit={handleSubmit}
          handlerChanges={handlerChanges}
        />
      </div>
      <div className={style.linkContainer}>
        <NavLink
          to="/home"
          className={style.link}
          onClick={handleReloadProducts}
        >
          Inicio
        </NavLink>
        <NavLink to="/aboutus" className={style.link}>
          Sobre Nosotros
        </NavLink>
        <NavLink to="/newproduct" className={style.link}>
          Crear Producto
        </NavLink>

        <NavLink to="/register" className={style.link}>
          Registrarse
        </NavLink>
        <NavLink to="/login" className={style.link}>
          Ingresar
        </NavLink>
        <NavLink to="/admin" className={style.link}>
          Dashboard
        </NavLink>
        <div className={style.link}>
          <Carrito />
        </div>
      </div>
    </nav>
  );
}
