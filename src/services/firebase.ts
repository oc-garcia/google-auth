// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGFLrZxSRLsup-a17RlNzVo4oig6PKyJg",
  authDomain: "auth-acb3a.firebaseapp.com",
  projectId: "auth-acb3a",
  storageBucket: "auth-acb3a.appspot.com",
  messagingSenderId: "195818699587",
  appId: "1:195818699587:web:570fb1749d934936e24df6",
  measurementId: "G-GT2F5GKH02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
