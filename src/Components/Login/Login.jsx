import React from "react";
import { SignIn } from "@clerk/clerk-react";
import style from "./Login.module.css"



function Login() {
  return(
  <div className={style.container}>
    <div className={style.inputContainer}>
    <h2>Iniciar Sesion</h2>
    <label className={style.label}>Email</label>
    <input className={style.input} placeholder="Email" type="email" name="email" />
    <label className={style.label}>Contraseña</label>
    <input className={style.input} placeholder="Contraseña" type="password" name="password" />
    <button className={style.button}>Iniciar</button>
    </div>
  </div>
  )
}

export default Login;