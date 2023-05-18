// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt_ZiqpyZ8oo1iqTCoPlFEMnT8rnfSVIQ",
  authDomain: "stims-v9.firebaseapp.com",
  databaseURL: "http://localhost:9000/?ns=stims-v9-default-rtdb",
  projectId: "stims-v9",
  storageBucket: "stims-v9.appspot.com",
  messagingSenderId: "175201013538",
  appId: "1:175201013538:web:42c0666564077b7c6bdf7b",
  measurementId: "G-LN9D1YYD5K"
};
firebase.initializeApp(firebaseConfig);




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);