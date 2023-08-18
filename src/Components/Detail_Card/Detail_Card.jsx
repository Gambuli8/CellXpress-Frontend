/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import style from "./detail.module.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useCart from "../Hooks/useCart";
import Swal from "sweetalert2";
import Navbar from "../NavBar/Navbar";
<<<<<<< HEAD
import StarRating from "../StarRating/StarRating";

=======
import { useAuth } from "../../context/authContext";
>>>>>>> b993929aa6670202b09f6fdc89e8ccdc6a02e87b

export default function Detail_Card() {
  const { user } = useAuth();

  /*estado de productos */
  const [product, setProduct] = useState({});

  const { addToCart } = useCart();

  const handlerAddToCart = () => {
    addToCart(product);
    Swal.fire({
      title: "Producto agregado al carrito",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  /* estado de redux */
  const allProduct = useSelector((state) => state.allProduct);
  const { id } = useParams();

  /* funcion para buscar el producto por id */
  useEffect(() => {
    setProduct(allProduct.find((p) => p?._id == id));
    // setProduct(producttrue);
  }, [allProduct, id]);

  return (
    <>
      <Navbar />
      <div className={style.container}>
        {product?._id ? (
          <div className={style.cardContainer}>
            <a className={style.btn_back} href="/home">
              Atras
            </a>
            <div className={style.card}>
              <div className={style.card_image}>
                <img className={style.image} src={product?.image} alt="image" />
              </div>
<<<<<<< HEAD
              <div className={style.countContainer}>
                <li className={style.totalPrice}>Total: ${product.price} </li>
              </div>
              <button className={style.btn_addCart} onClick={() => handlerAddToCart()}>Agregar al carrito</button>
              <div>
      <StarRating/>
      </div>
             
              <h3>Descripción:</h3>
              <p className={style.card__text}>{product?.description}</p>
=======
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
                {user ? (
                  <button
                    className={style.btn_addCart}
                    onClick={() => handlerAddToCart()}
                  >
                    Agregar al carrito
                  </button>
                ) : (
                  <Link to="/login" className={style.parrafo_login}>
                    <div className={style.btn_login}>
                      <p className={style.parrafo_login}>
                        iniciar sesión para comprar
                      </p>
                    </div>
                  </Link>
                )}
                {/* <div className={style.raiting}>
                <h3 className={style.raiting__text}>Calificación:</h3>
                <p className={style.raiting__stars}>{product?.rating[0]?.rate}</p>
                <div className={style.stars}>
          {starRating.map((_, index) => {
            return (
              <img 
              style={{transition: "color 200ms", width: '20px', height:'20px', outline: 'none', margin: '0 2px', padding: '0', fontSize: '1.2rem', color: ''}}
              src="https://res.cloudinary.com/djqwbu0my/image/upload/v1690138662/star-vacia_zygqve.svg" 
              alt='estrella rating' 
              key={index}
              />
            );
          })}
        </div>
              </div> */}
                <h3>Descripción:</h3>
                <p className={style.card__text}>{product?.description}</p>
              </div>
>>>>>>> b993929aa6670202b09f6fdc89e8ccdc6a02e87b
            </div>
          </div>
        ) : (
          <h1>Cargando...</h1>
        )}
      </div>
    </>
  );
}
