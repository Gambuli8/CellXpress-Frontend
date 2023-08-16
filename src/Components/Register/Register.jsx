import React, { useState, useEffect } from "react";
import style from "./Register.module.css";
import { useDispatch } from "react-redux";
import { postUser } from "../../Redux/Actions";
import { validate } from "../Validate/Validate";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { signup, loginGoogle, user } = useAuth();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [userFire, setUserFire] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  console.log(userFire.email, userFire.name, user);
  const [input, setInput] = useState({
    name: "",
    phone: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors("");
    const validationErrors = validate(input);

    if (Object.keys(validationErrors).length === 0) {
      try {
        setErrors({})
        signup(input.email, input.password);
        navigate("/home");
      } catch (error) {
        console.log(error)
      }

      dispatch(postUser(input));
      setInput({
        name: "",
        phone: "",
        email: "",
        password: "",
      });
    }
  };
  const fireDb = (user) => {
    dispatch(postUser(userFire));
    navigate("/home");
  }
  useEffect(() => {
    if (user) {
      setUserFire({
        name: user.displayName,
        phone: user.PhoneNumber,
        email: user.email,
        password: user.accessToken,
      });
      console.log(userFire);
    }
  }, [user])

  const registerWithGoogle = async (e) => {
    try {
      e.preventDefault();
      setErrors({});
      await loginGoogle();
    } catch (error) {
      console.log(error)
    }
  };

  /*useEffect((user) => {
    if (user !== null) {
      setUserFire({
        name: user.displayName,
        phone: user.PhoneNumber,
        email: user.email,
        password: user.accessToken,
        uid: user.uid
      })
      dispatch(postUser(userFire));
    }
  }, [user])*/

  return (
    <div className={style.contenedor}>
      <a href="/home" className={style.back}>
        Back
      </a>
      <div className={style.container}>
        <form className={style.inputContainer} onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <label className={style.label}>Full Name</label>
          <input
            className={style.input}
            onChange={handleChange}
            value={input.name}
            type="text"
            name="name"
          />
          {errors.name && <p className={style.error}>{errors.name}</p>}
          <label className={style.label}>Phone</label>
          <input
            className={style.input}
            onChange={handleChange}
            value={input.lastname}
            type="number"
            name="phone"
          />
          {errors.lastname && <p className={style.error}>{errors.lastname}</p>}
          <label className={style.label}>Email</label>
          <input
            className={style.input}
            onChange={handleChange}
            value={input.email}
            type="email"
            name="email"
          />
          {errors.email && <p className={style.error}>{errors.email}</p>}
          <label className={style.label}>Password</label>
          <input
            className={style.input}
            onChange={handleChange}
            value={input.password}
            type="password"
            name="password"
          />
          {errors.password && <p className={style.error}>{errors.password}</p>}
          <button type="submit" className={style.button}>
            Submit
          </button>
        </form>

        <div className={style.inputContainer}>
          <button
            type="button"
            className={style.button}
            onClick={registerWithGoogle}
          >
            Login With Google
          </button>
          {user && (
            <div>
              <p>Bienvenido {user.displayName}</p>
              <button className={style.button} onClick={fireDb}>
                Submit Login Google
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Register;


