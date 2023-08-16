/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card_Phone from "../Card_Phone/Card_Phone";
import style from "./Cards_Phone.module.css";
import useCart from "../Hooks/useCart";

const Cards_Phone = ({ Product }) => {
  const { addToCart, cart, removeFromCart } = useCart();
  const checkProduct = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  console.log(Product);
  return (
    <div className={style.contenedorCards}>
      {Product.map((product) => {
        const isProductInCart = checkProduct(product);
        return (
          <Card_Phone
            id={product._id}
            title={product.title}
            price={product.price}
            brand={product.brand}
            description={product.description}
            image={product.image}
            rating={product.rating}
            count={product.count}
            key={product._id}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            isProductInCart={isProductInCart}
          />
        );
      })}
    </div>
  );
};
export default Cards_Phone;
