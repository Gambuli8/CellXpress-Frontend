import React from "react";
import "./App.css";
import { ClerkProvider, SignIn } from "@clerk/clerk-react";

if (!process.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function Login() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignIn />
    </ClerkProvider>
  );
}

export default App;