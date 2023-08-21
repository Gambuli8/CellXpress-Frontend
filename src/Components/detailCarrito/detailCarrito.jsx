/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import style from './detail.module.css'
import useCart from '../Hooks/useCart'
import FormCart from '../FormCarrito/formCart'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers, getPendingOrderById, postUserId } from "../../Redux/Actions";
import { useAuth } from "../../context/authContext";

  export default function DetailCarrito() {
    const { cart } = useCart();
    const dispatch = useDispatch();
    const user = useAuth().user;
    const allUsers = useSelector((state) => state.allUsers);
    const pendingOrderById = useSelector((state) => state.pendingOrderById);
  
    useEffect(() => {
      dispatch(getUsers());
    }, [user, dispatch]);
  
    const userParam =
      user && allUsers.find((userParam) => userParam.email === user.email);
  
    useEffect(() => {
      if (userParam) {
        dispatch(getPendingOrderById(userParam._id));
      }
    }, [userParam, dispatch]);
  
    const handlePostUserId = async () => {
      if (userParam) {
        try {
          await dispatch(postUserId(userParam._id));
          // hacer algo luego de que el postUserId se complete
        } catch (error) {
          console.error("Error posting userId:", error);
        }
      }
    };

  return (
    <>
      <a className={style.btn_back} href="/home">
        Atras
      </a>
    <div className={style.container}>
      <div className={style.containerCart}>
        <h1>Carrito</h1>
        <ul>
          {pendingOrderById.map((order) => (
            <li key={order._id}>
              {/* Render the pending order details here */}
              <p>Orden creada en: {order.createdAt}</p>
              <ul>
                {order.products.map((item) => (
                  <li key={item.product._id}>
                    {/* Render each product in the pending order */}
                    <img
                      width={100}
                      height={100}
                      src={item.product.image}
                      alt={item.product.title}
                    />
                    <p>Producto: {item.product.title}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.product.price}</p>
                  </li>
                ))}
              </ul>
              <p>Total: ${order.total}</p>
              <p>Estado: {order.status}</p>
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
