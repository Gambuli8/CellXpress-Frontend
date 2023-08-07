/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import style from "./detail.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Detail_Card() {
  /*estado de productos */
  const [product, setProduct] = useState({});

  /* estado de redux */
  const allProduct = useSelector((state) => state.allProduct);
  const { id } = useParams();

  /* funcion para buscar el producto por id */
  useEffect(() => {
    setProduct(allProduct.find((p) => p?._id == id));
  }, [allProduct, id]);

  /* funciones de cantidad y precio */
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
    setPrice(price + product?.price);
  };
  const handleSubtract = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
    setPrice(price - product?.price);
  };

  return (
    <div className={style.container}>
      {product?._id ? (
        <div className={style.cardContainer}>
          <a className={style.btn_back} href="/home">
            Atras
          </a>
          <div className={style.card}>
            <div className={style.card__image}>
              <img
                className={style.card__image}
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
                <div className={style.card__counter}>
                  <button onClick={handleSubtract} className={style.card__btn}>
                    -
                  </button>
                  <div className={style.card__counter_score}>{count}</div>
                  <button onClick={handleAdd} className={style.card__btn}>
                    +
                  </button>
                </div>
                <li className={style.totalPrice}>Total: ${price} </li>
              </div>
              <button className={style.btn_addCart}>Agregar al carrito</button>
              <h3>Descripción:</h3>
              <p className={style.card__text}>{product?.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
}