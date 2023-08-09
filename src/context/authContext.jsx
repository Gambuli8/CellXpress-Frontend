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

   const signup = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
   }
   const login = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
   }
   const logout = () => {
      signOut(auth)
   }
   const loginGoogle =()=>{
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
