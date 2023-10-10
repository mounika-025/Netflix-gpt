// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlQ4rjmUPmBn5BQRQM4iRyX34ARD6LdGU",
  authDomain: "netflix-gpt-66323.firebaseapp.com",
  projectId: "netflix-gpt-66323",
  storageBucket: "netflix-gpt-66323.appspot.com",
  messagingSenderId: "30649608033",
  appId: "1:30649608033:web:38d588556db787ea210720",
  measurementId: "G-C7604RJPM9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
