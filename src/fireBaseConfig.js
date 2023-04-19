// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7G9cEuKsT1uxNYhZqp8WC0pz0HFyd78A",
  authDomain: "chess-c6af9.firebaseapp.com",
  databaseURL: "https://chess-c6af9-default-rtdb.firebaseio.com",
  projectId: "chess-c6af9",
  storageBucket: "chess-c6af9.appspot.com",
  messagingSenderId: "975008676447",
  appId: "1:975008676447:web:16a1841b5446003c97f9ea",
  measurementId: "G-ET42TCMPGW"
};

// Initialize Firebase
export const  app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);
// export const database = getDatabase();