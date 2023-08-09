import style from "./DashboardAdmin.module.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/NavBar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/Actions";
import { useEffect } from "react";
export default function DashboardAdmin() {
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  console.log("all users", allUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleReloadUsers = () => {
    dispatch(getUsers());
  };

  console.log("este es el nameeee", allUsers.email);

  return (
    <div className={style.dashContainer}>
      <Navbar />
      <h2>Admin</h2>
      <div className={style.containerDos}>
        <div>
          <Sidebar handleReloadUsers={handleReloadUsers} />
        </div>
        <div className={style.containerUsers}>
          <h2 className={style.tituloUsers}>Usuarios</h2>
          <div>
            {allUsers.map((user, index) => (
              <ul className={style.listContainer}>
                <li key={index} className={style.itemList}>
                  {user.name}
                </li>
                <li key={index} className={style.itemList}>
                  {user.lastname}
                </li>
                <li key={index} className={style.itemList}>
                  {user.email}
                </li>
                🚝🛺
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
