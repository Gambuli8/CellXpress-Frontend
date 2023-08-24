

import style from "./DetailUser.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../context/authContext";
import StarRating from "../StarRating/StarRating"
import { Link, useNavigate, useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getOrderById,
  editPutUser,
  getUserById,
  postCalificar,
  resetStar,
  getReviewsUser,
} from "../../Redux/Actions";

const DetailUser = () => {
  const allOrderByID = useSelector((state) => state.orderById);

  console.log("555555555555555555555555555555",allOrderByID)
  const reviewsUser = useSelector((state) => state.getreviewsuser);
  const allUsuariosByID = useSelector((state) => state.allUsers);
  const usuario = allUsuariosByID.name;
  const stars = useSelector((state) => state.star);

  const { id } = useParams();
  const { user } = useAuth();

  const [calificar, setcalificar] = useState({
    productId: "",
    nickname: usuario,
    num: [],
    comment: "",
  });
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    phone: "",
    id: id,
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

  useEffect(() => {
    setcalificar((prevCalificar) => ({
      ...prevCalificar,
      num: stars,
    }));
  }, [stars]);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    dispatch(getReviewsUser(usuario));
  }, [usuario]);

  const handleSubmit = () => {
    dispatch(editPutUser(input));
    console.log(allOrderByID.products);
  };
  const handleSubmitCalificar = (event) => {
    if (!stars || stars.length === 0) {
      alert("Debes Calificar  las estrellitas");
      return;
    } else {
      setTimeout(() => {
        dispatch(postCalificar(calificar));
      }, 1000);
      setTimeout(() => {
        dispatch(resetStar());
        setcalificar({
          productId: "",
          nickname: "",
          num: null,
          comment: "",
        });
      }, 2000);

      dispatch(getUserById())
    }
  };

  const onChangeCalificar = (eve) => {
    eve.preventDefault();
    setcalificar({
      ...calificar,
      [eve.target.name]: eve.target.value,
    });
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
      {/* //! Ordenes de compras ------------------------------------------------------- */}
      <h2>Ordenes de compras Calificadas</h2>
      <div className={style.containerOrdenesCompras}>
        {allOrderByID.map((elemento) => {
          return (
            <div key={elemento._id} className={style.ordenCompra}>
              <div className={style.ordenDetail}>
                {elemento.products.map((e) => {
                 if(e.product.rating.length >0){


                  return (
                    <ul
                      key={e._id}
                      className={style.containerProduct}
                      onClick={() =>
                        setcalificar({
                          ...calificar,
                          productId: e.product._id,
                          num: stars,
                          comment: calificar.comment,
                          nickname: usuario,
                        })
                      }
                    ><img
                        src={e.product.image}
                        alt={e.product.title}
                        width="80px"
                        height="80px"
                      />
                      <li className={style.label}>{e.product.title}</li>
                      <li className={style.label}>{e.product.brand}</li>
                      <li className={style.label}>${elemento.total}</li>
                      <div></div>
                      <li className={style.label}>{e.quantity}</li>
                  </ul>
                  )} 
                  else{
                    return (
                      <ul
                        key={e._id}
                        className={style.containerProduct}
                        onClick={() =>
                          setcalificar({
                            ...calificar,
                            productId: e.product._id,
                            num: stars,
                            comment: calificar.comment,
                            nickname: usuario,
                          })
                        }
                      ><img
                          src={e.product.image}
                          alt={e.product.title}
                          width="80px"
                          height="80px"
                        />
                        <li className={style.label}>{e.product.title}</li>
                        <li className={style.label}>{e.product.brand}</li>
                        <li className={style.label}>${elemento.total}</li>
                        <div>
                          <StarRating />
                          <textarea
                            name="comment"
                            onChange={onChangeCalificar}
                          ></textarea>
                        </div>
                        <li className={style.label}>{e.quantity}</li>
  
                        <button
                          onClick={() => handleSubmitCalificar(e.product._id)}
                        >
                          Enviar
                        </button>
                      </ul>
                    )} })}
              </div>
            </div>
          )

        })}
      </div>
    </div>
  );
};
export default DetailUser;
