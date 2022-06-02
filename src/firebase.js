// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1wmVqbgBL_Jr9TRXPlqsZytspVS7pSMA",
  authDomain: "airbnb-a1d9a.firebaseapp.com",
  projectId: "airbnb-a1d9a",
  storageBucket: "airbnb-a1d9a.appspot.com",
  messagingSenderId: "436835781789",
  appId: "1:436835781789:web:02e374d3e6aeda04361874",
  measurementId: "G-WLHZ0JWSSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)