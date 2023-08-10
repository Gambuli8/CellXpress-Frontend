/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../Hooks/useCart";
import { useAuth } from "../../context/authContext";

const Card_Phone = (props) => {
  const { user }= useAuth()

  // const {addToCart} = useCart();

  const handlerAddToCart = () => {
    props.addToCart(props);
    Swal.fire({
      title: "Producto agregado al carrito",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
    });
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
          <div className={style.card_button} onClick={() => handlerAddToCart()}>
            <img className={style.svg_icon} src="https://res.cloudinary.com/djqwbu0my/image/upload/v1691159692/Pngtree_shopping_cart_icon_3582761_vd41rl.png" alt="" />
      </div>
    </div>
  </div>
    </>
  );
};


export default Card_Phone;
