// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);

export default app;
