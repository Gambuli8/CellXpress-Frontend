// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy3VziLjO976iMg2H7Wly7CVrGJJHOCPg",
  authDomain: "cellxpress-872a5.firebaseapp.com",
  projectId: "cellxpress-872a5",
  storageBucket: "cellxpress-872a5.appspot.com",
  messagingSenderId: "173102662327",
  appId: "1:173102662327:web:195fd1c89b02d0ac300332",
  measurementId: "G-58FYRN811Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);