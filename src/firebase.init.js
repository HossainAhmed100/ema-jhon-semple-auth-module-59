// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGneWP3RUgUPzY9MmdiOJ1xO2R_fAfKD0",
  authDomain: "simple-ema-jhon-a5c00.firebaseapp.com",
  projectId: "simple-ema-jhon-a5c00",
  storageBucket: "simple-ema-jhon-a5c00.appspot.com",
  messagingSenderId: "17103247682",
  appId: "1:17103247682:web:16142d9c9452a00ec650db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;