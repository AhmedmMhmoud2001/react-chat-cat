// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2tXWq_bwQwZ57g1KatZnCXlq1MCeODck",
  authDomain: "react-chat-f7816.firebaseapp.com",
  projectId: "react-chat-f7816",
  storageBucket: "react-chat-f7816.appspot.com",
  messagingSenderId: "625048312978",
  appId: "1:625048312978:web:f376ef3040e767c7205a4b",
  measurementId: "G-LFBM6G3W6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);