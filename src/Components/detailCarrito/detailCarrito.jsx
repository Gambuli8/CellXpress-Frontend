/* eslint-disable react-hooks/rules-of-hooks */
import style from './detail.module.css'
import useCart from '../Hooks/useCart'
import FormCart from '../FormCarrito/formCart'

export default function detailCarrito() {
  const { cart } = useCart()
  return (
    <>
      <a className={style.btn_back} href="/home">
        Atras
      </a>
    <div className={style.container}>
      <div className={style.containerCart}>
        <h1>Carrito</h1>
        <ul className={style.ul}>
          {cart.map((product) => (
            <li className={style.li} key={product.id}>
              <img width={150} height={150} src={product.image} alt={product.title} />
              <div className={style.info}>
              <h3 className={style.h3}>{product.brand}</h3>
                <strong>{product.title}</strong>
                <p className={style.p}>Cantidad: {product.quantity}</p>
              </div>
                <p className={style.price}>Precio: ${product.price}</p>
            </li>
          ))}
        </ul>
        <div className={style.totalPrice}>
        <h2>Total ${cart.reduce((acc, el) => acc + el.price * el.quantity, 0)}</h2>
        </div>
      </div>
      <div className={style.containerForm}>
        {FormCart()}
      </div>
    </div>
  </>
  )
}
