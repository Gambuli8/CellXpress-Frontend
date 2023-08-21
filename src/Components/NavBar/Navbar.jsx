/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import style from "./navBar.module.css";
import Searchbar from "../SearchBar/SearchBar";
import { useAuth } from "../../context/authContext";
import Carrito from "../Carrito/Carrito";
import { useEffect } from "react";
import { getUsers } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar({
  handleSubmit,
  handlerChanges,
  handleReloadProducts,
}) {
  const dispatch = useDispatch();
  const { user, logout } = useAuth();
  const allUseres = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [user]);

  const userParam =
    user && allUseres.find((userParam) => userParam.email === user.email);
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
        <a href="/home" className={style.link} onClick={handleReloadProducts}>
          Inicio
        </a>
        <NavLink to="/aboutus" className={style.link}>
          Sobre Nosotros
        </NavLink>
        {!user && (
          <NavLink to="/register" className={style.link}>
            Registrarse
          </NavLink>
        )}
        {!user ? (
          <NavLink to="/login" className={style.link}>
            Ingresar
          </NavLink>
        ) : (
          <div className={style.user}>
              {userParam && (
              <NavLink to={`/user/${userParam._id}`}>{userParam.name}</NavLink>
            )}
            <button onClick={logout} className={style.btn}>
              Log Out
            </button>
          </div>
        )}
        <div className={style.link}>
          <Carrito />
        </div>
      </div>
    </nav>
  );
}
