// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbQtvT6MXKrua6EtMt1PuOjPE5UpR7Blk",
  authDomain: "modsen-twitter-b01db.firebaseapp.com",
  projectId: "modsen-twitter-b01db",
  storageBucket: "modsen-twitter-b01db.firebasestorage.app",
  messagingSenderId: "106486128941",
  appId: "1:106486128941:web:31f80aa7db864bc308f3a4",
  measurementId: "G-1K3D19NF20",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
