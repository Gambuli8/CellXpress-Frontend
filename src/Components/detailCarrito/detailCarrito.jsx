/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCart from '../Hooks/useCart';
import { getUsers, getPendingOrderById, postUserId, updateCartItemQuantity } from '../../Redux/Actions';
import { useAuth } from '../../context/authContext';
import style from './detail.module.css';
import formStyle from './formCart.module.css';

export default function DetailAndFormCart() {
  const { cart } = useCart();
  const dispatch = useDispatch();
  const user = useAuth().user;
  const allUsers = useSelector((state) => state.allUsers);
  const order = useSelector((state) => state.order);
  const pendingOrderById = useSelector((state) => state.pendingOrderById);
  const [localQuantities, setLocalQuantities] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [user, dispatch]);

  const userParam = user && allUsers.find((userParam) => userParam.email === user.email);

  useEffect(() => {
    if (userParam) {
      dispatch(getPendingOrderById(userParam._id));
    }
  }, [userParam, dispatch]);

  const handleIncrement = (productId) => {
    setLocalQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setLocalQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
    }));
  };

  const handleFinalizePurchase = async () => {
    try {
      const userId = userParam._id;

      for (const productId in localQuantities) {
        const quantity = localQuantities[productId];
        await dispatch(updateCartItemQuantity(userId, productId, quantity));
      }

    } catch (error) {
      console.error('Error finalizing purchase:', error);
    }
  };

  const handlePayment = async () => {
    if (userParam) {
      try {
        const response = await dispatch(postUserId(userParam._id)); // Ejecuta la acción y obtiene la respuesta

        const paymentLink = response.data.paymentLink; // Accede a la propiedad paymentLink de la respuesta
        console.log(paymentLink);

        if (paymentLink) {
          // Abre la ventana nueva para realizar el pago
          window.open(paymentLink, '_blank');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleConfirm = () => {
    setConfirmed(true);
    handleFinalizePurchase()
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
                      <img width={100} height={100} src={item.product.image} alt={item.product.title} />
                      <p>Producto: {item.product.title}</p>
                      <p>Cantidad: {localQuantities[item.product._id] || item.quantity}</p>
                      <p>Precio: ${item.product.price}</p>
                      <button onClick={() => handleIncrement(item.product._id)}>+</button>
                      <button onClick={() => handleDecrement(item.product._id)}>-</button>
                    </li>
                  ))}
                </ul>
                <p>Total: ${order.total}</p>
                <p>Estado: {order.status}</p>
              </li>
            ))}
          </ul>
          <div className={style.totalPrice}>
            <h2>Total ${order.reduce((acc, el) => acc + el.price * el.quantity, 0)}</h2>
          </div>
          <button onClick={handleConfirm} disabled={confirmed}>
            Confirmar
          </button>
          <button onClick={handlePayment} disabled={!confirmed}>
            Ir a pagar
          </button>
        </div>
      </div>
    </>
  );
}
