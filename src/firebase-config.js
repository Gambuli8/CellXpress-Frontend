import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
export const firebaseConfig = {
    apiKey: "AIzaSyAy3VziLjO976iMg2H7Wly7CVrGJJHOCPg",
    authDomain: "cellxpress-872a5.firebaseapp.com",
    projectId: "cellxpress-872a5",
    storageBucket: "cellxpress-872a5.appspot.com",
    messagingSenderId: "173102662327",
    appId: "1:173102662327:web:195fd1c89b02d0ac300332",
    measurementId: "G-58FYRN811Z"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);