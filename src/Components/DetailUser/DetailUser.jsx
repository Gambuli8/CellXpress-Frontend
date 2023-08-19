import style from "./DetailUser.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../context/authContext";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUsers, orderBuy, getProduct } from "../../Redux/Actions";

const DetailUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(orderBuy());
    dispatch(getProduct());
  }, []);

  const { user } = useAuth();
  const data = useSelector((state) => state.allUsers);
  const ordenes = useSelector((state) => state.orderBuy);
  const products = useSelector((state) => state.allProduct);
  const { email } = useParams();
  const [userActive, setUserActive] = useState({});
  const [userOrder, setUserOrder] = useState({});
  const [userProduct, setUserProduct] = useState({});
  const [input, setInput] = useState({
    name: userActive.name,
    phone: userActive.phone,
    address: userActive.address,
  });

  // console.log("orderbuy", ordenes);
  // console.log("Productossss usuariossss", products);
  // const probando = userOrder.products.map((product) => {
  //   if (product.product.length > 0) {
  //     return probando.push(product.product);
  //   }
  // });
  //! Use effect de products
  useEffect(() => {
    const foundProduct = products.filter(
      (produdctData) => produdctData._id === userOrder.products
    );
    setUserProduct(foundProduct || {});
  }, [products, userOrder.products]);

  // console.log("estado userProduct", userProduct);

  //* use effect de ordenes
  useEffect(() => {
    const foundOrder = ordenes.find(
      (orderData) => orderData.userId === userActive._id
    );
    setUserOrder(foundOrder || {});
  }, [ordenes, userActive._id]);

  console.log("User ORDEEEER", userOrder.products[0]);

  //! use effect de users
  useEffect(() => {
    const foundUser = data.find((userData) => userData.email === user.email);
    setUserActive(foundUser || {});
  }, [data, email]);

  const handlerClick = () => {};

  const handlerClickInput = () => {
    return <input type="text" placeholder={userActive.name} />;
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={style.container}>
      <div>
        <h3>Cambia tus datos</h3>
        <label className={style.label}>Nombre</label>
        <input
          className={style.input}
          type="text"
          name="title"
          onChange={handleChange}
          value={input.name}
          required
          placeholder={userActive.name}
        />

        <label className={style.label}>Phone</label>
        <input
          className={style.input}
          type="phone"
          name="phone"
          onChange={handleChange}
          value={input.phone}
          required
          placeholder={userActive.phone ? userActive.phone : "ej: 3516147191"}
        />
        <label className={style.label}>Adress</label>
        <input
          className={style.input}
          type="address"
          name="address"
          onChange={handleChange}
          value={input.address}
          required
          placeholder={
            userActive.address ? userActive.address : "Av. Colon 1500"
          }
        />
      </div>
      {/* {purchases? <button onClick={hancdlerClick}>Purchase</button> : null} */}
    </div>
  );
};
export default DetailUser;
