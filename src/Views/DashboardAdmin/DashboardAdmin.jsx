import style from "./DashboardAdmin.module.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/NavBar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/Actions";
import { useEffect, useState } from "react";
import DashUser from "./DashUsers/DashUsers";
import DashProduct from "./DashProducts/DashProducts";
import DashOrder from "./DashOrders/DashOrders";
import { useAuth } from "../../context/authContext"
import NewProduct from "../../Components/NewProduct/NewProduct";

export default function DashboardAdmin() {
  const { user, logout } = useAuth();
  
  const allUser = useSelector((state)=> state.allUsers)

  const adminUsers = user && allUser.find((adminUser) => adminUser.email === user.email);

const dispatch =useDispatch()
useEffect(()=>{
  dispatch(getUsers())
},[])

  const [activeTab, setActiveTab] = useState(" ");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  switch (adminUsers?.admin) {
    case true:
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
          {activeTab === "newproduct" && <NewProduct />}
        </div>
      </div>
     
    </div>
    
  );
  default:
      return <h1> You are not an administrator authorized </h1>;
  }
}
