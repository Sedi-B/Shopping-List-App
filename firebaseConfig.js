// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATOQAsdTBi0Q-jhvZNCTCRNzO90PFn_QQ",
  authDomain: "shoplist-4b287.firebaseapp.com",
  projectId: "shoplist-4b287",
  storageBucket: "shoplist-4b287.appspot.com",
  messagingSenderId: "779185323498",
  appId: "1:779185323498:web:58d671b21809ed829c4693",
  measurementId: "G-HZWTMXQKWS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
