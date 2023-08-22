/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useSelector } from "react-redux";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const order = useSelector(state => state.order);
    const [cart, setCart] = useState(
        order || []
      );
    
      const saveCart = () => {
        localStorage.setItem("carrito", JSON.stringify(cart));
      };
    
      const addToCart = (product) => {
        const productIndex = cart.findIndex((p) => p.id === product._id);
    
        if (productIndex === 0 ) {
          const newCart = structuredClone(cart);
          newCart[productIndex].quantity + 1;
          return setCart(newCart);
        }
        setCart((prevState) => [
          ...prevState,
          {
            ...product,
            quantity: 1,
          },
        ]);

      };
      saveCart(cart);
    
      const removeFromCart = (product) => {
        setCart(cart.filter((p) => p.id !== product.id));
      };
    
      const ClearCart = () => {
        setCart([]);
      };
    
      return (
        <CartContext.Provider
          value={{ cart, addToCart, ClearCart, removeFromCart, saveCart, setCart }}
        >
          {children}
        </CartContext.Provider>
    );
};