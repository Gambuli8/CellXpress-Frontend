import style from "./DashboardAdmin.module.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/NavBar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/Actions";
import { useEffect, useState } from "react";
import DashUser from "./DashUsers/DashUsers";
import DashProduct from "./DashProducts/DashProducts";
import DashOrder from "./DashOrders/DashOrders";
export default function DashboardAdmin() {
  const [activeTab, setActiveTab] = useState(" ");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={style.dashContainer}>
      <Navbar />
      <h2>Admin</h2>
      <div className={style.containerDos}>
        <div>
          <Sidebar onTabChange={handleTabChange} />
        </div>
        <div className={style.containerUsers}>
          {activeTab === "users" && <DashUser />}
          {activeTab === "products" && <DashProduct />}
          {activeTab === "order" && <DashOrder />}
        </div>
      </div>
    </div>
  );
}
