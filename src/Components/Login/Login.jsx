import React, { useState } from "react";
import style from "./Login.module.css";
import { validate } from "../Validate/Validate";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

function Login() {
  const {login, loginGoogle} = useAuth();
  const navigate = useNavigate()
  const [input, setInput] = useState({
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
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors("")
    const validationErrors = validate(input);

    if (Object.keys(validationErrors).length === 0) {

      try {
        await login(input.email, input.password)
        navigate("/home")
      } catch (error) { 
        console.log(error.message)
        }
      }
  };
  const loginWithGoogle = async() =>{
    try {
      await loginGoogle()
      navigate("/home")
    } catch (error) {
      console.log(error.message)
    }
  }

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
            name="email"
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
            name="password"
            onChange={handleChange}
          />
          {errors.passwordAcces && (
            <p className={style.error}>{errors.passwordAcces}</p>
          )}
          <button className={style.button}>Iniciar</button>
          <p>-------------0-------------</p>
          <button className={style.button} onClick={loginWithGoogle}>
            Iniciar con Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
