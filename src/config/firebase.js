// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// refs: docs firestore: https://firebase.google.com/docs/firestore/quickstart

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3d2qNGoTV5F0C0jhzmLZBiBoZamHhapw",
  authDomain: "slack-ffd4f.firebaseapp.com",
  projectId: "slack-ffd4f",
  storageBucket: "slack-ffd4f.appspot.com",
  messagingSenderId: "964565358562",
  appId: "1:964565358562:web:5143f80cbd91047b3a0bbb",
  measurementId: "G-5V390Z3KHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth()

const db = getFirestore(app);

export {analytics, provider, auth, db}