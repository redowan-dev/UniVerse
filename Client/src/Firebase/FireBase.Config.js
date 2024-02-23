// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu5CGcAHNWsvql_f1-vC0sp7esiofCKnY",
  authDomain: "universe-f63b7.firebaseapp.com",
  projectId: "universe-f63b7",
  storageBucket: "universe-f63b7.appspot.com",
  messagingSenderId: "203331321392",
  appId: "1:203331321392:web:0a239ecb92c0d91637b7f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
export default app;