// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS65EQM5WM6OEQi0V2fGLnzWiXmHt68V0",
  authDomain: "ecommerce-platform-54eae.firebaseapp.com",
  projectId: "ecommerce-platform-54eae",
  storageBucket: "ecommerce-platform-54eae.firebasestorage.app",
  messagingSenderId: "945131940367",
  appId: "1:945131940367:web:7b317737558cdc808fd17a",
  measurementId: "G-6XFESBX12S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);