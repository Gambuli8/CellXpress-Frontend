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

   const signup = async (email, password) => {
      await createUserWithEmailAndPassword(auth, email, password)
   }
   const login = async (email, password) => {
      await signInWithEmailAndPassword(auth, email, password)
   }
   const logout = async () => {
      await signOut(auth)
   }
   const loginGoogle = async ()=>{
       const provgoogle = new GoogleAuthProvider();
      return await signInWithPopup(auth, provgoogle)
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
