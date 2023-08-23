import style from "./DetailUser.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../context/authContext";
import StarRating from "../StarRating/StarRating";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getOrderById,
  editPutUser,
  getUserById,
  postCalificar,
} from "../../Redux/Actions";
import Comentary from "../Comentary/Comentary";

const DetailUser = () => {
  const star = useSelector((state) => state.star);

  const { id } = useParams();
  const { user } = useAuth();

  //* Estado para calificaciones y comentarios por producto
  const [productRating, setProductRating] = useState({});

  // const [calificar, setcalificar] = useState({
  //   productId: "",
  //   nickname: "",
  //   comment: "",
  //   num: "",
  // });

  const dispatch = useDispatch();
  const allOrderByID = useSelector((state) => state.orderById);
  const allUsuariosByID = useSelector((state) => state.allUsers);
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

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(editPutUser(input));
    console.log(allOrderByID.products);
  };

  // const onChangeCalificar = (eve) => {
  //   eve.preventDefault();
  //   setcalificar({
  //     ...calificar,
  //     [eve.target.name]: eve.target.value,
  //   });
  // };

  // const onChangeCalificar = (eve) => {
  //   eve.preventDefault();
  //   const { name, value } = eve.target;
  //   setcalificar((prevCalificar) => ({
  //     ...prevCalificar,
  //     [name]: value,
  //   }));
  // };
  // useEffect(() => {
  //   if (star) {
  //     setcalificar({ num: star });
  //   }
  // }, [star]);

  //!funcion para actualizar la calificacion por producto
  const handleStar = (productId, star) => {
    console.log("star handle star", star);
    setProductRating((prevRatings) => ({
      ...prevRatings,
      [productId]: {
        ...prevRatings[productId],
        star: star,
      },
    }));
  };

  console.log("prrrroductrating", productRating);
  //!funcion para actualizar el comentario por producto

  const handleSetComment = (productId, comment) => {
    setProductRating((prevRatings) => ({
      ...prevRatings,
      [productId]: {
        ...prevRatings[productId],
        comment: comment,
      },
    }));
  };

  // const handleSubmitCalificar = (event) => {
  //   event.preventDefault();
  //   const updatedCalificar = {
  //     ...calificar,
  //     num: star,
  //   };

  //   console.log("updateCalificarrrrr", updatedCalificar);
  //   dispatch(postCalificar(updatedCalificar));
  // };

  const handleSubmitCalificar = (productId) => {
    const prRating = productRating[productId];
    console.log("prrrrating", productRating);
    if (prRating?.star > 0) {
      const updateCalificar = {
        productId: productId,
        nickname: prRating.nickname,
        comment: prRating.comment,
        num: prRating.star,
      };
      console.log("updateCalificar", updateCalificar);
      dispatch(postCalificar(updateCalificar));
    } else {
      console.log("Seleccione una calificacion antes de enviar");
    }
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
      <h2>Ordenes de compras</h2>
      <div className={style.containerOrdenesCompras}>
        {allOrderByID.map((elemento) => {
          return (
            <div key={elemento._id} className={style.ordenCompra}>
              <div className={style.ordenDetail}>
                {elemento.products.map((e) => {
                  return (
                    <ul
                      key={e._id}
                      className={style.containerProduct}
                      // onClick={() =>
                      //   setcalificar({
                      //     productId: e.product._id,
                      //     nickname: elemento.userId,
                      //     num: star,
                      //   })
                      // }
                    >
                      {/* {console.log("PRUEBASSSSSSSSSSSSSSSSSSSSS",e._id)} */}
                      <img
                        src={e.product.image}
                        alt={e.product.title}
                        width="80px"
                        height="80px"
                      />
                      <li className={style.label}>{e.product.title}</li>
                      <li className={style.label}>{e.product.brand}</li>
                      <li className={style.label}>${elemento.total}</li>
                      <div>
                        <StarRating
                          value={productRating[e.product._id]?.star || 0}
                          onChange={(newStar) =>
                            handleStar(e.product._id, newStar)
                          }
                        />
                        {productRating[e.product._id]?.star && (
                          <textarea
                            name="comment"
                            value={productRating[e.product._id]?.comment || ""}
                            onChange={(event) =>
                              handleSetComment(
                                e.product._id,
                                event.target.value
                              )
                            }
                          ></textarea>
                        )}
                      </div>
                      <li className={style.label}>{e.quantity}</li>

                      <button
                        onClick={() => handleSubmitCalificar(e.product._id)}
                      >
                        Enviar
                      </button>
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
