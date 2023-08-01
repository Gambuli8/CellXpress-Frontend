import React from "react";
import { SignUp } from "@clerk/clerk-react"
import style from "./Register.module.css"

const Register = () => {
    return (
        <div className={style.container}>
            <div className={style.inputContainer}>
            <h2>Registrarse</h2>
            <label >Nombre</label>
            <input type="text" name="name" />
            <label >Apellido</label>
            <input type="text" name="lastname" />
            <label >Email</label>
            <input type="email" name="email" />
            <label >Contraseña</label>
            <input type="password" name="password" />
            </div>
        </div>
    )
}
export default Register;