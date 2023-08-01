import React from "react";
import { SignIn } from "@clerk/clerk-react";
import style from "./Login.module.css"

function Login() {
  return( 
  <div className={style.Container}>
    <SignIn />
  </div>
  )
}

export default Login;