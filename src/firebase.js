// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKZ8SfT1Fqfb9NSpAeXBt6J76I-6-xW_E",
  authDomain: "comma-hack-violet.firebaseapp.com",
  projectId: "comma-hack-violet",
  storageBucket: "comma-hack-violet.appspot.com",
  messagingSenderId: "842779462723",
  appId: "1:842779462723:web:b75adc0d3b382a709e58f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)