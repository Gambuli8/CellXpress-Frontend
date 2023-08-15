import { createContext, useContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
   GoogleAuthProvider,
   signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase-config";

const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const signup =  async (email, password) => {
      await createUserWithEmailAndPassword(auth, email, password)
   }
   const login = async (email, password) => {
      try{
         await signInWithEmailAndPassword(auth, email, password)
      }catch(error){
         console.log(error.message)
         alert(error.message)
      }
   }
   const logout =  async () => {
      await signOut(auth)
   }
   const loginGoogle =  ()=>{
       const provgoogle = new GoogleAuthProvider();
      return signInWithPopup(auth, provgoogle)
   }
   useEffect(() => {
          onAuthStateChanged(auth, currentuser => {
         setUser(currentuser);
         setLoading(false);
      })
   }, [])

   return (
      <AuthContext.Provider
         value={{
            signup,
            login,
            logout,
            user,
            loading,
            loginGoogle
         }}>
         {children}
      </AuthContext.Provider>);
};
export const useAuth = () => {
   const context = useContext(AuthContext)
   if (!context) throw new Error("no se encuentra el proovedor de usuario")
   return context
}
