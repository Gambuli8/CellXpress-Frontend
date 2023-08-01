import { NavLink } from "react-router-dom";
import style from "./navBar.module.css";
export default function Navbar() {
  return (
    <nav className={style.navContainer}>
      <div>
        <NavLink to="/home" className={style.link}>
          <h1 className={style.logo}>CellXpress</h1>
        </NavLink>
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
