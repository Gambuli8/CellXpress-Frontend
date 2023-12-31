/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import style from "./detail.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useCart from "../Hooks/useCart";
import Swal from "sweetalert2";
import Navbar from "../NavBar/Navbar";
import { getProduct } from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import { postOrder } from "../../Redux/Actions";
import { useAuth } from "../../context/authContext";
import { getUsers, getComentarios} from "../../Redux/Actions";

export default function Detail_Card(productId) {
  /*estado de productos */
  const [product, setProduct] = useState({});
  
  const { addToCart } = useCart();
  const dispatch = useDispatch();
  const user = useAuth().user;
  const allUsers = useSelector((state) => state.allUsers);
  const  allcomentarios = useSelector((state)=> state.comentarios)
  
  console.log("comentarios ",allcomentarios)

  useEffect(() => {
    dispatch(getUsers());
  }, [user, dispatch]);

  const userParam =
  user && allUsers.find((userParam) => userParam.email === user.email);
  
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
  


  /* estado de redux */
  const allProduct = useSelector((state) => state.allProduct);
  const { id } = useParams();

  /* funcion para buscar el producto por id */
  useEffect(() => {
    if(!allProduct){
      dispatch(getProduct())
    }
   
    setProduct(allProduct.find((p) => p?._id == id))
  }, [ dispatch, allProduct, id]);
 
  useEffect(()=>{
    dispatch(getComentarios(id))
  },[dispatch,id])
   
   useEffect(() => {
    dispatch(getProduct());
  }, [id, dispatch]);

  const StarRating = ({ value }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= value ? style.starActive : style.starInactive}>
          &#9733;
        </span>
      );
    }
    return <button className={style.starRating}>{stars}</button>;
  };


  return (
    <>
      <Navbar/>
    <div className={style.container}>
      {product?._id ? (
        <div className={style.cardContainer}>
          <a className={style.btn_back} href="/home">
            Atras
          </a>
          <div className={style.card}>
            <div className={style.card_image}>
              <img
                className={style.image}
                src={product?.image}
                alt="image"
                />
            </div>
            <div className={style.cardInfo}>
              <h4 className={style.card__brand}>
                {product?.brand.toUpperCase()}
              </h4>
              <h1 className={style.card__title}>{product?.title}</h1>
              <div className={style.price}>
                <h3>Precio:</h3>
                <p className={style.price_Number}>${product?.price}</p>
              </div>
              <div className={style.countContainer}>
                <li className={style.totalPrice}>Total: ${product.price} </li>
              </div>
              <button className={style.btn_addCart} onClick={() => handlerAddToCart(product._id)}>Agregar al carrito</button>
              <h1>Valoracion: <StarRating value={product?.rate} /> </h1>
              <h3>Descripción:</h3>
              <p className={style.card__text}>{product?.description}</p>
            </div>
            
          </div>

          <div className={style.cardComments}> 
             
              <h1>Reseñas de este producto: </h1>
              <hr />
          {allcomentarios.map((c) =>{
            
            return (
              <div key = {c._id }
              id= {c._id}
              //comment= {c.review.comment}
              >
                <h1>Nombre: {c.review?.nickname}  </h1>
                <h1>{c.review?.comment}</h1>
                <h1>Valoracion: <StarRating value={c.review?.num} /> </h1>
                <hr />
                 </div>
              )
              
            })
            
          }
          </div>
        </div>
      ) : (
        <h1>Cargando...</h1>
        )}
    </div>

  </>
  );
}
