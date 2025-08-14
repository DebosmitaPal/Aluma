import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {  GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPJPut3ukxqSqejyd4lsxWs4EEUv4Nhmw",
  authDomain: "tryone-32076.firebaseapp.com",
  projectId: "tryone-32076",
  storageBucket: "tryone-32076.firebasestorage.app",
  messagingSenderId: "327011966947",
  appId: "1:327011966947:web:a4ed13c9b88e33fe2f4ad6",
  measurementId: "G-V0E1BJ4FH4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
