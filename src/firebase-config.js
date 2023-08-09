// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy3VziLjO976iMg2H7Wly7CVrGJJHOCPg",
  authDomain: "cellxpress-872a5.firebaseapp.com",
  projectId: "cellxpress-872a5",
  storageBucket: "cellxpress-872a5.appspot.com",
  messagingSenderId: "173102662327",
  appId: "1:173102662327:web:195fd1c89b02d0ac300332"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);