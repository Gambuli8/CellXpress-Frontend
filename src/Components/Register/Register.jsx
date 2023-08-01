import React from "react";
import { SignUp } from "@clerk/clerk-react"
import style from "./Register.module.css"

const Register = () => {
    return (
        <div className={style.container}>
            <div className={style.inputContainer}>
            <h2>Registrarse</h2>
            <label className={style.label}>Nombre</label>
            <input className={style.input} type="text" name="name" />
            <label className={style.label}>Apellido</label>
            <input className={style.input} type="text" name="lastname" />
            <label className={style.label}>Email</label>
            <input className={style.input} type="email" name="email" />
            <label className={style.label}>Contraseña</label>
            <input className={style.input} type="password" name="password" />
            <button className={style.button}>Registrar</button>
            </div>
        </div>
    )
}
export default Register;