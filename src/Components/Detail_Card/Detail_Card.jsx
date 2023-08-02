/* eslint-disable no-unused-vars */
import style from './detail.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {getAllProducts} from '../../Redux/Actions'

export default function Detail_Card() {
  const [product, setProduct] = useState({})
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])
  
  const allProducts = useSelector((state) => state?.allProducts)
  
  useEffect(() => {
    setProduct(allProducts?.find((p) => p.id === id))
  }, [allProducts, id])
  
  console.log(allProducts);
  
  const { id } = useParams();
  
  
  const [price, setPrice] = useState(product.price)
  const [count, setCount] = useState(1)
  const handleAdd = () => {
    setCount(count + 1)
    setPrice(price + product.price)
  }
  const handleSubtract = () => {
    if (count <= 1) {
      return
    }
    setCount(count - 1)
    setPrice(price - product.price)
  }


  return (
    <div className={style.container}>
      {product?.id ? (
        <>
        <a className={style.btn_back} href="/home">Atras</a>
        <div className={style.card}>
          <div className={style.card__content}>
            <h1 className={style.card__title}>{product.title}</h1>
            <h4>{product.rating}</h4>
            <h3>Especificaciones:</h3>
            <ul>
              <li>Procesador: Apple A15 Bionic</li>
              <li>Memoria RAM: 6GB</li>
              <li>Almacenamiento: 128GB</li>
              <li>Pantalla: 6.1 pulgadas</li>
              <li>Cámara: 12MP + 12MP + 12MP</li>
              <li>Batería: 3,095 mAh</li>
            </ul>
            <h3>Descripción:</h3>
            <p className={style.card__text}>{product.description}</p>
        <div className={style.card__image}>
          <img width={400} height={400} src={product.image} alt="image" />
          </div>
            </div>
            <div className={style.cart}>
              <h1>Carrito</h1>
              <ul className={style.list_Cart}>
              <li className={style.list}>Precio: ${product.price} </li>
              <li className={style.list}>Cantidad: {product.count} </li>
              <div className={style.count}>
              <a className={style.btn_quantity} onClick={handleAdd}> + </a>
              <h3 className={style.count_Number}>{count}</h3>
              <a onClick={handleSubtract} className={style.btn_quantity}> - </a>
              </div>
              <li className={style.list}>Total: {count} </li>
              </ul>
              <button className={style.btn_addCart}>Agregar al carrito</button>
              <p>{product.brand}</p>
            </div>
            </div>
        </>
    ) : (
      <h1>Cargando...</h1>
    )}
    </div>
    )
}
