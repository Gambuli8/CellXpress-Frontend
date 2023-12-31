/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import style from "./Login.module.css";
import { validate } from "../Validate/Validate";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../Hooks/useLocalStorage.js";
import { getUsers, postUser } from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";

function Login() {
  const { login, loginGoogle, user } = useAuth();
  const navigate = useNavigate();
  const [input, setInput] = useLocalStorage("input",{
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    //? Manejo del input
    const { name, value } = event.target;
    const error = validate(name, value);
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      //? Manejo de errores
      ...prevErrors,
      [name]: error,
    }));
    if (user) {
      dispatch(postUser(user));
      setInput({
        name: user.displayName,
        phone: user.phoneNumber,
        email: user.email,
        password: user.uid,
      });
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  });

  const handleReloadProducts = () => {
    dispatch(getProduct()); // O la acción para cargar los productos
      
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors("");
    const validationErrors = validate(input);

    if (Object.keys(validationErrors).length === 0) {
     
      await login(input.email, input.password);
      user && window.location.assign("https://pf-cell-xpress-frontend.vercel.app/home");
     
    }
  };
  const loginWithGoogle = async () => {
    await loginGoogle();
    window.location.assign("https://pf-cell-xpress-frontend.vercel.app/home");
    
  };

 
  return (
    <div className={style.contenedor}>
      <a href="/home" className={style.back}>
        Back
      </a>
      <div className={style.container}>
        <form className={style.inputContainer} onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <label className={style.label}>Email</label>
          <input
            className={style.input}
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
            value={input.email}
          />
          {errors.emailAcces && (
            <p className={style.error}>{errors.emailAcces}</p>
          )}
          <label className={style.label}>Password</label>
          <input
            className={style.input}
            placeholder="Contraseña"
            type="password"
            name="password"
            onChange={handleChange}
            value={input.password}
          />
          {errors.passwordAcces && (
            <p className={style.error}>{errors.passwordAcces}</p>
          )}
          <button className={style.button} onClick={handleReloadProducts}>Login 
          </button>
          <p className={style.label}>-------------O-------------</p>
          
        </form>
        <button className={style.button} onClick={loginWithGoogle}>
            Login With Google
          </button>
      </div>
    </div>
  );
}

export default Login;
