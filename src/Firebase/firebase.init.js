// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS4ofu0ZBzXQD8OQR92Q1DdwXJ6Z3dXPM",
  authDomain: "fardin-newspaper.firebaseapp.com",
  projectId: "fardin-newspaper",
  storageBucket: "fardin-newspaper.firebasestorage.app",
  messagingSenderId: "580174105271",
  appId: "1:580174105271:web:23a9c86c635d74c9129b32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
