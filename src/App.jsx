import React from "react";
import "./App.css"
import Login from "./Components/Login/Login"
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter,Routes, Route } from "react-router-dom"
import dotenv from "dotenv"
dotenv.config()

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;




function App() {
  return (
    <ClerkProvider>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </ClerkProvider>

  );
}

export default App;