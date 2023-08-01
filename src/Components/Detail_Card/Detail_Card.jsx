/* eslint-disable no-unused-vars */
import style from './detail.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Detail_Card() {
  const [count, setCount] = useState(1)
  const [price, setPrice] = useState(1099)
  const [product, setProduct] = useState({})

  const { id } = useParams();
    

  const handleAdd = () => {
    setCount(count + 1)
    setPrice(price + 1099)
  }
  const handleSubtract = () => {
    if (count <= 1) {
      return
    }
    setCount(count - 1)
    setPrice(price - 1099)
  }


  return (
    <div className={style.container}>
      <a className={style.btn_back} href="/home">Atras</a>
      <div className={style.card}>
          <div className={style.card__content}>
            <h1 className={style.card__title}>Card Title</h1>
            <h3>Especificaciones:</h3>
            <ul>
              <li>Procesador: Apple A15 Bionic</li>
              <li>Memoria RAM: 6GB</li>
              <li>Almacenamiento: 128GB</li>
              <li>Pantalla: 6.1 pulgadas</li>
              <li>Cámara: 12MP + 12MP + 12MP</li>
              <li>Batería: 3,095 mAh</li>
            </ul>
            <p className={style.card__text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, molestiae. Voluptate dolor tenetur inventore quam, ab cupiditate saepe, omnis, sint consectetur mollitia sit vitae officiis labore illum architecto tempore ut!</p>
        <div className={style.card__image}>
          <img width={400} height={400} src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-3.jpg" alt="image" />
          </div>
            </div>
            <div className={style.cart}>
              <h1>Carrito</h1>
              <ul className={style.list_Cart}>
              <li className={style.list}>Precio: ${price} </li>
              <li className={style.list}>Cantidad: </li>
              <div className={style.count}>
              <a className={style.btn_quantity} onClick={handleAdd}> + </a>
              <h3 className={style.count_Number}>{count}</h3>
              <a onClick={handleSubtract} className={style.btn_quantity}> - </a>
              </div>
              <li className={style.list}>Subtotal: </li>
              <li className={style.list}>Impuestos: </li>
              <li className={style.list}>Total: </li>
              </ul>
              <button className={style.btn_addCart}>Agregar al carrito</button>
            </div>
            </div>
    </div>
  )
}
