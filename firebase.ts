// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  Firestore,
  getDocs,
  // getFirestore,
} from "firebase/firestore";
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

// const db = getFirestore(app);

export const getUsers = async (db: Firestore) => {
  const citiesCol = collection(db, "users");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
};

// const usersCollection = collection(db, "users");
// const users = await getDocs(usersCollection);

const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:5000");

export const login = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );
  console.log(userCredential.user);
};

export const signup = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const logout = async () => await signOut(auth);

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log("Logged in");
  } else {
    console.log("No user");
  }
});

export default app;
