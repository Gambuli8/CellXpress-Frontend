import { Link, NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

const Sidebar = ({ onTabChange }) => {
  return (
    <div className={style.sidebar}>
      <ul className={style.listDash}>
        <li className={style.itemDash}>
          <button onClick={() => onTabChange("users")}>Usuarios</button>
        </li>
        <li className={style.itemDash}>
          <button onClick={() => onTabChange("products")}>Productos</button>
        </li>
        <li className={style.itemDash}>
          <button onClick={() => onTabChange("newproduct")}>Nuevo Producto</button>
        </li>
        <li className={style.itemDash}>
          <button onClick={() => onTabChange("order")}>
            Ordenes de compra
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
