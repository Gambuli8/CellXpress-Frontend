/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import style from "./Card.module.css";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../Hooks/useCart";
import { useAuth } from "../../context/authContext";
import { postOrder, getUsers } from "../../Redux/Actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Card_Phone = (props) => {
  const dispatch = useDispatch(); // Agrega el dispatcher para usar en postOrder
  const user = useAuth().user;
  const allUsers = useSelector((state) => state.allUsers);
  
  useEffect(() => {
    dispatch(getUsers());
  }, [user, dispatch]);

  const userParam =
  user && allUsers.find((userParam) => userParam.email === user.email);


  const {cart} = useCart();

  const handlerAddToCart2 = () => {
    Swal.fire({
      title: "ya tienes este producto en el carrito",
      icon: "error",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const handlerAddToCart = async (productId) => {
    try {
      const order = {
        userId: userParam._id,
        productId: productId,
        quantity: 1,
      };
  
      const response = await dispatch(postOrder(order));
  
      Swal.fire({
        title: "Producto agregado al carrito",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
  
      console.log(response); // Puedes hacer algo con la respuesta si lo necesitas
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
      Swal.fire({
        title: "Error al agregar al carrito",
        text: error.message,
        icon: "error",
      });
    }
  };
  

  return (
    <>
      <div className={style.card}>
        <div className={style.card_img}>
          <img className={style.image} src={props.image} />
        </div>
        <div className={style.card_info}>
          {/* <p className={style.text_title}>{props.rating[0].rate}</p> */}
          <p className={style.text_title}>{props.brand.toUpperCase()}</p>

          <p className={style.text_body}>{props.title}</p>

          <div className={style.btn}>
            <Link className={style.link} to={`/detailCard/${props.id}`}>
              <button className={style.btn}>Ver más</button>
            </Link>
          </div>
        </div>
        <div className={style.card_footer}>
          <span className={style.text_title}>${props.price}</span>
          {user ? (
            cart.find((item) => item.id === props.id)
              ? (
              <div className={style.card_button} onClick={() => handlerAddToCart2()}>
              <img
                className={style.svg_icon1}
                src="https://res.cloudinary.com/djqwbu0my/image/upload/v1691159692/Pngtree_shopping_cart_icon_3582761_vd41rl.png"
                alt=""
                />
            </div>
            ) : (
              <div className={style.card_button} onClick={() => handlerAddToCart(props.id)}>
              <img
                className={style.svg_icon}
                src="https://res.cloudinary.com/djqwbu0my/image/upload/v1691159692/Pngtree_shopping_cart_icon_3582761_vd41rl.png"
                alt=""
                />
            </div>
            )
          ) : (
            <Link to="/login" className={style.parrafo_login}>
              <div className={style.btn_login}>
               <p className={style.parrafo_login}>iniciar para comprar</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Card_Phone;
