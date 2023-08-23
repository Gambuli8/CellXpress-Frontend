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
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

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
<<<<<<< HEAD
=======

  const items = [
    {
      key: '1',
      label: (
        <a className={style.perfil} rel="noopener noreferrer" href={`/user/${userParam?._id}`}>
          Perfil
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <button className={style.btn_logout} onClick={logout}>Log out</button>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
  ];


  console.log(user)
>>>>>>> 440d95e57e8ed8ece54e9ad5bd69d1c52a27f0e4

  return (
    <nav className={style.navContainer}>
      <div>
        <NavLink
          to="/home"
          className={style.titleLogo}
          onClick={handleReloadProducts}
        >
          {/* <h1 className={style.logo}>CellXpress</h1> */}
          <img className={style.logoimg} src="https://res.cloudinary.com/djqwbu0my/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1691088616/OIP_mzc6jr.jpg" alt="" />
        </NavLink>
      </div>
      <div>
        <Searchbar
          handleSubmit={handleSubmit}
          handlerChanges={handlerChanges}
        />
      </div>

      <div className={style.linkContainer}>
<<<<<<< HEAD
        {userParam?.admin && (
          <a
            href="/admin"
            className={style.link}
            onClick={handleReloadProducts}
          >
            Administrador
          </a>
        )}
=======
        {userParam?.admin &&
          <a href="/admin" className={style.link} onClick={handleReloadProducts}>
            Administrador
          </a>
        }
>>>>>>> 440d95e57e8ed8ece54e9ad5bd69d1c52a27f0e4

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
        {!user && (
          <NavLink to="/login" className={style.link}>
            Ingresar
          </NavLink>
<<<<<<< HEAD
        ) : (
          <div className={style.user}>
            {userParam && (
              <NavLink to={`/user/${userParam._id}`}>{userParam.name}</NavLink>
            )}
            <button onClick={logout} className={style.btn}>
              Log Out
            </button>
          </div>
=======
>>>>>>> 440d95e57e8ed8ece54e9ad5bd69d1c52a27f0e4
        )}
        <div className={style.user}>
          {userParam && (

            <Dropdown 
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <img src={user.photoURL} alt={userParam.name} className={style.img} />
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          )}
        </div>
        <div className={style.link}>
          <Carrito />
        </div>
      </div>
    </nav>
  );
}
