/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useEffect, useId, useState } from "react";
import style from "./Carrito.module.css";
import useCart from "../Hooks/useCart";
import swal from "sweetalert2";
import { Link, useLocation } from "react-router-dom";
import { postInfo, postUserId, deleteProduct, getUsers, getPendingOrderById } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

function CartItem(product) {

  const { removeFromCart, cart, saveCart } = useCart();
  const dispatch = useDispatch();
  const user = useAuth().user;

  const allUsers = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [user, dispatch]);

  const userParam =
  user && allUsers.find((userParam) => userParam.email === user.email);
  
  //mandar info de compra a la base de datos
   const [input, setInput] = useState({
    productId: product.id,
    quantity: product.quantity,
    userId: userParam?._id,
  });
  // console.log(input);

  // console.log(cart);
  
  const handleBuy = () => {
    dispatch(postInfo(input));
  };

  const handleDeleteProduct = () => {
    removeFromCart(product);
    dispatch(deleteProduct(input.productId, input.userId));
  };
  
  useEffect(() => {
    handleBuy();
  }, [cart]);


  //estados para el precio y la cantidad de productos en el carrito
  const [price, setPrice] = useState(
    JSON.parse(localStorage.getItem("carrito")).find(
      (item) => item.id === product.id
    )?.price
  );
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("carrito")).find(
      (item) => item.id === product.id
    )?.quantity
  );

  // funciones de suma y resta de la cantidad de productos en el carrito dependiendo del stock
  const handleAdd = () => {
    if (count < product?.count) {
      setCount(count + 1);
      setPrice(price + product.price);
      cart.find((item) => item.id === product.id).quantity = count + 1;
      cart.find((item) => item.id === product.id).price = price + product.price;
      saveCart(...cart, product);
    } else {
      swal.fire("No hay más stock de este producto");
    }
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
      setPrice(price - product.price);
      cart.find((item) => item.id === product.id).quantity = count - 1;
      cart.find((item) => item.id === product.id).price = price - product.price;
      saveCart(...cart, product);
    } else {
      swal.fire("No puedes tener menos de 1 producto en el carrito");
    }
  };

  //funcion para mostrar el producto en el carrito
  const handleShow = () => {
    return (
      <li>
        <img width={200} height={200} src={product.image} alt={product.title} />
        <div>
          <strong>{product.title}</strong>
        </div>
        <footer>
          <small>
            <button onClick={handleSubtract}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
          </small>
          <strong>${price}</strong>
        </footer>
        <button onClick={() => handleDeleteProduct(product)}>
          eliminar producto
        </button>
      </li>
    );
  };

  return <>{handleShow()}</>;
}

export default function Carrito() {
  const cartCheckId = useId();
  const { cart, ClearCart, addToCart, } = useCart();

  const dispatch = useDispatch();
  const user = useAuth().user;
  // const navigate = useNavigate();
  // const {pathname} = useLocation();

  const navigate = useNavigate();

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

  const handleUserId = () => {
    dispatch(postUserId(userParam?._id));
  };
  
  // const handlerRut = () => {
  //   if(pathname('/carrito') )
  //   navigate('/carrito');
  // }

  const handleClearCart = () => {
    swal
      .fire({
        title: "¿Estás seguro?",
        text: "¿Quieres eliminar todos los productos del carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "No, cancelar",
        reverseButtons: true,
        width: "400px",
        height: "400px",
      })
      .then((result) => {
        if (result.isConfirmed) {
          ClearCart();
          swal.fire(
            "Carrito vaciado",
            "Los productos fueron eliminados del carrito",
            "success"
          );
        }
      });
  };

  const handlerRut = () => {
    // if(pendingOrderById[0]?.products){
    //   swal.fire({
    //     title: "Carrito Vacio",
    //     text: "Agregue al carrito para poder comprar",
    //     icon: "warning",
    //   })
    // } else {
      navigate('/carrito');
    // } 
  }

  // console.log(pendingOrderById[0].products[0]);

  return (
    <>
      <label onClick={handlerRut} htmlFor={cartCheckId} className={style.cart_button}>
        <span className={style.cart_icon}>
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={style.svg}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z"
              fill="#f0f0f0"
            />
          </svg>
        </span>
      </label>
      <input type="checkbox" id={cartCheckId} hidden />

      <aside className={style.cart}>
        <ul>
          {pendingOrderById.length === 0 && <p>El carrito está vacío</p>}
          {pendingOrderById.map((product) => (
            <CartItem
              key={product._id}
              addToCart={() => addToCart(product)}
              count={product.quantity}
              {...product}
            />
          ))} 
        </ul>
        {pendingOrderById.length > 0 ? (
          <button onClick={() => handleClearCart()}>
            <strong>clear cart</strong>
          </button>
        ) : null}
        {pendingOrderById.length > 0 ? (
          <Link to="/carrito">
            <button onClick={() => handleUserId()}>
              <strong>Realizar compra</strong>
            </button>
          </Link>
        ) : null}
      </aside>
    </>
  );
}
