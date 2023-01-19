// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuQmyB22lTROk2gi4Q_pWUOJy3AYbJMCA",
  authDomain: "tc-react-firebase-v9.firebaseapp.com",
  projectId: "tc-react-firebase-v9",
  storageBucket: "tc-react-firebase-v9.appspot.com",
  messagingSenderId: "89799026624",
  appId: "1:89799026624:web:877dabd6a3a0ab152c8a25",
  measurementId: "G-Y7TCVZ0XFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);