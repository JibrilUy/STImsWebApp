import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = { 
  apiKey: "AIzaSyBt_ZiqpyZ8oo1iqTCoPlFEMnT8rnfSVIQ",
  authDomain: "stims-v9.firebaseapp.com",
  databaseURL: "https://stims-v9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "stims-v9",
  storageBucket: "stims-v9.appspot.com",
  messagingSenderId: "175201013538",
  appId: "1:175201013538:web:c838301914d5d4b46bdf7b",
  measurementId: "G-8NZD1B35VV"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const myButton = document.getElementById('myButton');
myButton.addEventListener('click', () => {
  alert('Hello, this is an alert message!');
});



