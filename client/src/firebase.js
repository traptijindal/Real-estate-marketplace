// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "real-estate-8b40f.firebaseapp.com",
  projectId: "real-estate-8b40f",
  storageBucket: "real-estate-8b40f.appspot.com",
  messagingSenderId: "1069979045456",
  appId: "1:1069979045456:web:8003d83261155ed4308b55"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);