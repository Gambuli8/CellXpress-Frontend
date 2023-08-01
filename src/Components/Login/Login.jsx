import React from "react";
import { SignIn } from "@clerk/clerk-react";
import style from "./Login.module.css"


function Login() {
  return( 
  <div className={style.Container}>
    <div className={style.inputContainer}>
    <h2>Iniciar Sesion</h2>
    <label >Email</label>
    <input type="email" name="email" />
    <label >Contraseña</label>
    <input type="password" name="password" />
    </div>
  </div>
  )
}

export default Login;