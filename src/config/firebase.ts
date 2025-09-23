// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo_uS0GPrCSxjUx3AtNi-Noa_uisQ-Q9w",
  authDomain: "react-project1-79317.firebaseapp.com",
  projectId: "react-project1-79317",
  storageBucket: "react-project1-79317.firebasestorage.app",
  messagingSenderId: "990572608433",
  appId: "1:990572608433:web:0c105351d94c14be1adb90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
