// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1MJW3gxbwBPYja46zCv9ixjCenBiAeA0",
  authDomain: "fir-authentication-49fd5.firebaseapp.com",
  projectId: "fir-authentication-49fd5",
  storageBucket: "fir-authentication-49fd5.firebasestorage.app",
  messagingSenderId: "399705770704",
  appId: "1:399705770704:web:b6c6620546197a33182cd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);