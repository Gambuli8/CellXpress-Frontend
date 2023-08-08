import React, { useState } from "react";
import style from "./Login.module.css";
import { useDispatch } from "react-redux";
import { validate } from "../Validate/Validate";
import { loginUser } from "../../Redux/Actions";
import { NavLink } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    emailAcces: "",
    passwordAcces: "",
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(input);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(loginUser(input));
      setInput({
        emailAcces: "",
        passwordAcces: "",
      });
    }
  };

  return (
    <div className={style.contenedor}>
      <a href="/home" className={style.back}>
        Volver
      </a>
      <div className={style.container}>
        <form className={style.inputContainer} onSubmit={handleSubmit}>
          <h2>Iniciar Sesion</h2>
          <label className={style.label}>Email</label>
          <input
            className={style.input}
            placeholder="Email"
            type="email"
            name="emailAcces"
            onChange={handleChange}
          />
          {errors.emailAcces && (
            <p className={style.error}>{errors.emailAcces}</p>
          )}
          <label className={style.label}>Contraseña</label>
          <input
            className={style.input}
            placeholder="Contraseña"
            type="password"
            name="passwordAcces"
            onChange={handleChange}
          />
          {errors.passwordAcces && (
            <p className={style.error}>{errors.passwordAcces}</p>
          )}
          <button className={style.button}>Iniciar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
