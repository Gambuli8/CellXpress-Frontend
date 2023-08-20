import style from "./DetailUser.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../context/authContext";

import { Link, useNavigate, useParams, Navigate } from "react-router-dom";



import { useState, useEffect } from "react";
import { getOrderById, editPutUser, getUserById } from "../../Redux/Actions";

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
    <div>
      <a className={style.btn_back} href="/home">
              Atras
            </a>


      <div className={style.containerProbando}>
        <div className={style.containerEditUser}>
          <div>
            <img
              src={
                user && user.photoURL
                  ? user.photoURL
                  : "https://cdn-icons-png.flaticon.com/128/2986/2986624.png"
              }
              alt=""
            />

          </div>
          <form onSubmit={handleSubmit} className={style.formEditUser}>
            <label>Su usuario</label>
            <input
              type="text"
              name="name"
              placeholder={allUsuariosByID.name}
              onChange={handleChange}
              required
            />
            <label>Su teléfono</label>
            <input
              type="number"
              name="phone"
              placeholder={
                allUsuariosByID.phone ? allUsuariosByID.phone : "ej: 3519887123"
              }
              onChange={handleChange}
            />
            <button className={style.btn}>Editar usuario</button>
          </form>
        </div>
        <div className={style.containerOrdenesCompras}>
          <h2>Ordenes de compras</h2>
          {allOrderByID.map((elemento) => {
            return (
              <div key={elemento._id} className={style.ordenCompra}>
                <label className={style.label}>{elemento._id}</label>
                <label className={style.label}>{elemento.total}</label>
                {console.log(elemento)}
                <div className={style.ordenDetail}>
                  {elemento.products.map((e) => {
                    return (
                      <div key={e._id}>
                        <img
                          src={e.product.image}
                          alt={e.product.title}
                          width="150px"
                          height="180px"
                        />
                        <label>{e.product.title}</label>
                        <label>{e.product.brand}</label>
                        <label className={style.label}>{elemento.total}</label>
                        <label className={style.quantity}>{e.quantity}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
export default DetailUser;
