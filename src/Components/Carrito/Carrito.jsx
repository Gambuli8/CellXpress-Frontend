/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useId, useState } from 'react'
import style from './Carrito.module.css'
import useCart from '../Hooks/useCart'
import swal from 'sweetalert2'
import { Link } from 'react-router-dom'

function CartItem ( product ) {
  const { removeFromCart, addToCart } = useCart()

  const [price, setPrice] = useState(product?.price);
  const [count, setCount] = useState(1);
  const handleAdd = () => {
    // agregar varias veces el mismo producto al carrito, que se sume el precio y la cantidad de ese producto en el carrito y se guarde en el localstorage
    setCount(count + product?.quantity);
    setPrice(price + product?.price);
  };



  const handleSubtract = () => {
    if (count <= 1) {
      return;
    }
    setCount(count - 1);
    setPrice(price - product?.price);
  };
  return (
    <li>
      <img width={200} height={200} src={product.image} alt={product.title} />
      <div>
        <strong>{product.title}</strong> - <span>${product.price}</span>
      </div>
      <footer>
        <small>
          <button onClick={handleSubtract}>-</button>
          <span>{count}</span>
          <button onClick={handleAdd}>+</button>
        </small>
        <strong>${price}</strong>
      </footer>
      <button onClick={() => removeFromCart(product)}>eliminar producto</button>
    </li>
  )
}

export default function Carrito() {
  const cartCheckId = useId()
  const { cart, ClearCart, addToCart } = useCart()

  const handleClearCart = () => {
    swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres eliminar todos los productos del carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true,
      width: '400px',
      height: '400px',
    }).then((result) => {
      if (result.isConfirmed) {
        ClearCart()
        swal.fire(
          'Carrito vaciado',
          'Los productos fueron eliminados del carrito',
          'success'
        )
      }
    })
  }

  return (
    <>
      <label htmlFor={cartCheckId} className={style.cart_button}>
        <span className={style.cart_icon}>
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z" fill="#0F0F0F"/>
        </svg>
        </span>
      </label>
      <input type="checkbox" id={cartCheckId} hidden />

      <aside className={style.cart}>
        <ul>
          {cart.length === 0 && <p>El carrito está vacío</p>}
          {cart.map(product => (
            <CartItem 
            key={product._id}
            addToCart={() => addToCart(product)}

            {...product} 
            />
          ))}
        </ul>
        {
          cart.length > 0 
          ?   <button onClick={() => handleClearCart()}>
                <strong>clear cart</strong>
              </button> 
          :   null
        }
        {
          cart.length > 0
          ?   <Link to='/carrito'><button>
              <strong>Realizar compra</strong>
              </button></Link> 
          :   null
        }
      </aside>
    </>
  )
}