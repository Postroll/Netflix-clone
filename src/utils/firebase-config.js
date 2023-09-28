// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk01ZwMWlWLtbip8BcaR_l8W4Xe9wpWr8",
  authDomain: "netflix-clone-61a37.firebaseapp.com",
  projectId: "netflix-clone-61a37",
  storageBucket: "netflix-clone-61a37.appspot.com",
  messagingSenderId: "721691027343",
  appId: "1:721691027343:web:c0d203a8a73828678acdfa",
  measurementId: "G-YY6W4GQT2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);