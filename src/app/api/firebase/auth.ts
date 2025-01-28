// "use server";

import {
  createUserWithEmailAndPassword,
  getAuth,
  // GoogleAuthProvider,
  signInWithEmailAndPassword,
  // signInWithPopup,
} from "firebase/auth";
import { app } from "./firebase";
// import { app, db, googleProvider } from "./firebase";
// import { FirebaseError } from "firebase/app";
// import { doc, getDoc, setDoc } from "firebase/firestore";

const auth = getAuth(app);

export const signUp = async (email: string, password: string) => {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export const signIn = async (email: string, password: string) => {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export const signInWithGoogle = async () => {
  // try {
  //   const result = await signInWithPopup(auth, googleProvider);
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential?.accessToken;
  //   const user = result.user;
  //   console.log(`Func: ${auth.currentUser}`);
  // } catch (error) {
  //   if (error instanceof FirebaseError) {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData?.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //   }
  // }
};

// const usersCollection = collection(db, "users");
// const users = await getDocs(usersCollection);

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

// onAuthStateChanged(auth, (user) => {
//   if (user !== null) {
//     console.log("Logged in");
//   } else {
//     console.log("No user");
//   }
// });
