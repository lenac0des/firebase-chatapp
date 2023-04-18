/**
    * @description      : 
    * @author           : ellen
    * @group            : 
    * @created          : 16/04/2023 - 18:32:19
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/04/2023
    * - Author          : ellen
    * - Modification    : 
**/

import { initializeApp } from "firebase/app";
// add google authentication
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDxYDz0p5_EWdQ6n6hDOOECBIGEn_zsCj8",
  authDomain: "tech-room-d7abc.firebaseapp.com",
  projectId: "tech-room-d7abc",
  storageBucket: "tech-room-d7abc.appspot.com",
  messagingSenderId: "109698433823",
  appId: "1:109698433823:web:525a49f77a832a998aa62a",
  measurementId: "G-QS9JTXD07K"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
