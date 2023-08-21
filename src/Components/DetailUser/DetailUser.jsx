import style from "./DetailUser.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../context/authContext";
import StarRating from "../StarRating/StarRating"

import { Link, useNavigate, useParams, Navigate } from "react-router-dom";



import { useState, useEffect } from "react";
import { getOrderById, editPutUser, getUserById } from "../../Redux/Actions";
import TextArea from "rc-textarea";

const DetailUser = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const dispatch = useDispatch();

  const allOrderByID = useSelector((state) => state.orderById);
  const allUsuariosByID = useSelector((state) => state.allUsers);
  const [input, setInput] = useState({
    name: "",
    phone: "",
    id: id,
  });
  //perfectoooooooooooooooo

  window.addEventListener('popstate', function (e) {
    //window.location.assign("http://localhost:5173/home");
     window.location.assign("https://pf-cell-xpress-frontend.vercel.app/home")
  });


  window.addEventListener('popstate', function (e) {
    window.location.assign("http://localhost:5173/home");
    window.location.assign("https://pf-cell-xpress-frontend.vercel.app/home")
  });



  useEffect(() => {
    dispatch(getOrderById(id));
    dispatch(getUserById(id));
    setInput({
      name: allUsuariosByID.name,
      phone: allUsuariosByID.phone,
      id: id,
    });
  }, [dispatch, id]);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };
  
  const handleSubmit = () => {

   dispatch(editPutUser(input));
     
  };
  return (
    <div className={style.container}>
      <a className={style.btn_back} href="/home">
              Atras
            </a>
        <div className={style.containerEditUser}>
          <div>
            <img
              src={
                user && user.photoURL
                  ? user.photoURL
                  : "https://cdn-icons-png.flaticon.com/128/2986/2986624.png"
              }
              alt=""
              className={style.img}
            />

          </div>
          <form onSubmit={handleSubmit} className={style.formEditUser}>
            <label>Su usuario</label>
            <input
              type="text"
              name="name"
              className={style.input}
              placeholder={allUsuariosByID.name}
              onChange={handleChange}
            />
            <label>Su teléfono</label>
            <input
              type="number"
              name="phone"
              className={style.input}
              placeholder={
                allUsuariosByID.phone ? allUsuariosByID.phone : "ej: 3519887123"
              }
              onChange={handleChange}
            />
            <button className={style.btn_back}>Editar usuario</button>
          </form>
        </div>
          <h2>Ordenes de compras</h2>
        <div className={style.containerOrdenesCompras}>
          {allOrderByID.map((elemento) => {
            return (
              <div key={elemento._id} className={style.ordenCompra}>
                {console.log(elemento)}
                <div className={style.ordenDetail}>
                  {elemento.products.map((e) => {
                    return (
                      <ul key={e._id} className={style.containerProduct}>
                        <img
                          src={e.product.image}
                          alt={e.product.title}
                          width="80px"
                          height="80px"
                          />
                        <li className={style.label}>{e.product.title}</li>
                        <li className={style.label}>{e.product.brand}</li>
                        <li className={style.label}>${elemento.total}</li>
                        <StarRating/>
                        <li className={style.label}>{e.quantity}</li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
};
export default DetailUser;