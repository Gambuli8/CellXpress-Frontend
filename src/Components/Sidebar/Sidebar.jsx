import { Link, NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

const Sidebar = ({ handleReloadUsers }) => {
  return (
    <div className={style.sidebar}>
      <ul className={style.listDash}>
        <li className={style.itemDash}>
          <a href="/home" className={style.link}>
            Inicio
          </a>
        </li>
        <li className={style.itemDash}>
          <Link to="/newproduct" className={style.link}>
            Crear Producto
          </Link>
        </li>
        <li className={style.itemDash}>
          <NavLink onClick={handleReloadUsers} className={style.link}>
            Usuarios
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
