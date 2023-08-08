import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const AuthContext = createContext();


export const AuthProvider =({children}) =>{
   
     const signup=(email, password)=>{
      createUserWithEmailAndPassword(auth, email, password)
      console.log()
     }
     const login=(email,password)=>{
      signInWithEmailAndPassword(auth,email, password)
     }

     return (<AuthContext.Provider value={{signup,login}}>{children}</AuthContext.Provider>);

};
   export const useAuth =() =>{
      const context = useContext(AuthContext)
      if(!context)throw new Error("no se encuentra el proovedor de usuario")
      return context
   }