// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKOijKDlbY4Xz_e_3uM9cymIOkzRguHf0",
  authDomain: "e-shop-bangla.firebaseapp.com",
  projectId: "e-shop-bangla",
  storageBucket: "e-shop-bangla.appspot.com",
  messagingSenderId: "627164082095",
  appId: "1:627164082095:web:8e0d6197196f44b5fa495a",
  measurementId: "G-78PMT173TF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);