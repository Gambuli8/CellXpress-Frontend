
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import style from "./navBar.module.css";
import Searchbar from "../SearchBar/SearchBar";
import { useAuth } from "../../context/authContext"
import Carrito from "../Carrito/Carrito";

export default function Navbar({
  handleSubmit,
  handlerChanges,
  handleReloadProducts,
}) {
  const { user, logout } = useAuth()
  return (
    <nav className={style.navContainer}>
      <div>
        <NavLink
          to="/home"
          className={style.link}
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
        {!user &&
          <NavLink to="/register" className={style.link}>
            Registrarse
          </NavLink>}
        {!user ?
          <NavLink to="/login" className={style.link}>
            Ingresar
          </NavLink> :
          <div>
            <p>{user.displayName}</p>
            <button className={style.btn} onClick={logout}>Desconectar</button>
          </div>}
          {user && <div className={style.link}>
        <Carrito />
      </div>}
      </div>
    </nav>
  );
}
