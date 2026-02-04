// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt8yoPLbZKO82rnxMhBf-s4yzixPWlllc",
  authDomain: "college-admission-form-b2fda.firebaseapp.com",
  projectId: "college-admission-form-b2fda",
  storageBucket: "college-admission-form-b2fda.firebasestorage.app",
  messagingSenderId: "328335331543",
  appId: "1:328335331543:web:45ff7805d5c24912c7e092",
  measurementId: "G-PWG51WBH4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
