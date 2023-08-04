/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import style from './detail.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Detail_Card() {
  /*estado de productos */
  const [product, setProduct] = useState({})
  
  /* estado de redux */
  const allProduct = useSelector((state) => state.allProduct)
  const { id } = useParams();
  
  /* funcion para buscar el producto por id */
  useEffect(() => {
    setProduct(allProduct.find((p) => p?._id == id))
  }, [allProduct, id])

  /* funciones de cantidad y precio */
  const [price, setPrice] = useState(0)
  const [count, setCount] = useState(0)
  const handleAdd = () => {
    setCount(count + 1)
    setPrice(price + product?.price)
  }
  const handleSubtract = () => {
    if (count <= 0) {
      return
    }
    setCount(count - 1)
    setPrice(price - product?.price)
  }



  return (
    <div className={style.container}>
    {product?._id ? (
        <>
        <a className={style.btn_back} href="/home">Atras</a>
        <div className={style.card}>
          <div className={style.card__content}>
            <h4 className={style.card_brand}>{product?.brand}</h4>
            <h1 className={style.card__title}>{product?.title}</h1>
            <h3>Descripción:</h3>
            <p className={style.card__text}>{product?.description}</p>
        <div className={style.card__image}>
          <img width={400} height={400} src={product?.image} alt="image" />
          </div>
            </div>
            <div className={style.cart}>
              <h1>Carrito</h1>
              <ul className={style.list_Cart}>
              <li className={style.list}>Precio: ${price} </li>
              <div className={style.count}>
              <h3 className={style.list}>Cantidad:</h3>
              <a className={style.btn_quantity} onClick={handleAdd}> + </a>
              <h3 className={style.count_Number}>{count}</h3>
              <a onClick={handleSubtract} className={style.btn_quantity}> - </a>
              </div>
              <li className={style.list}>Total: {price} </li>
              </ul>
              <button className={style.btn_addCart}>Agregar al carrito</button>
            </div>
            </div>
        </>
    ) : (
      <h1>Cargando...</h1>
    )}
    </div>
    )
}
