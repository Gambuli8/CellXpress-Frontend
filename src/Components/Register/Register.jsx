import React,{useState} from "react";
import { SignUp } from "@clerk/clerk-react"
import style from "./Register.module.css"
import { useDispatch } from "react-redux";
import {validate} from "../Validate/Validate"

const Register = () => {

    const dispatch=useDispatch()
    const [input, setInput] = useState({
        name:"",
        lastname:"",
        email:"",
        password:""
    })
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
          dispatch(postUser(input));
          setInput({
            name:"",
            lastname:"",
            email:"",
            password:""
          });
        }
      };

    return (
        <div className={style.container}>
            <form className={style.inputContainer} onSubmit={handleSubmit}>
            <h2>Registrarse</h2>
            <label className={style.label}>Nombre</label>
            <input 
            className={style.input} 
            onChange={handleChange}
            value={input.name} 
            type="text" 
            name="name" />
            {errors.name && <p className={style.error}>{errors.name}</p>}
            <label className={style.label}>Apellido</label>
            <input 
            className={style.input} 
            onChange={handleChange}
            value={input.lastname} 
            type="text" 
            name="lastname" />
            {errors.lastname && <p className={style.error}>{errors.lastname}</p>}
            <label className={style.label}>Email</label>
            <input 
            className={style.input}
            onChange={handleChange} 
            value={input.email}
            type="email" 
            name="email" />
            {errors.email && <p className={style.error}>{errors.email}</p>}
            <label className={style.label}>Contraseña</label>
            <input 
            className={style.input}
            onChange={handleChange}
            value={input.password}
             type="password" 
             name="password" />
             {errors.password && <p className={style.error}>{errors.password}</p>}
            <button type="submit" className={style.button}>Registrar</button>
            </form>
        </div>
    )
}
export default Register;