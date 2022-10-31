/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import {
  doc,
  getDoc,
  getFirestore,
  setDoc
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy06ttvwIVdpCTPo-PADITaAjGZwpEZmk",
  authDomain: "e-commerce-cloth-db.firebaseapp.com",
  projectId: "e-commerce-cloth-db",
  storageBucket: "e-commerce-cloth-db.appspot.com",
  messagingSenderId: "940860473354",
  appId: "1:940860473354:web:78110e6b8ffb0369ec5ff3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const providerForGoogle = new GoogleAuthProvider();
providerForGoogle.setCustomParameters({
  prompt: "select_account"
});

// Google Sign in
const auth = getAuth();
export const signInWithGooglePopup = ()=>signInWithPopup(auth, providerForGoogle);

// Connect Firebase
const fireStoreDB = getFirestore();
export const createUserDocFromAuth = async (userAuth, additionalData = {}) =>{
  if(!userAuth) return;
  const userDocRef = doc(fireStoreDB, 'users', userAuth.uid);;
  try {
    const userData = await getDoc(userDocRef);
    if(!userData.exists()){
      const {
        displayName, 
        email
      } = userAuth;
      const createAt = new Date();
      await setDoc(userDocRef, {
        displayName,
        email,
        ...additionalData,
        createAt
      })
    }
  } catch (error) {
    console.error('error creating the user', error.message);
  } finally {
    return userDocRef;
  }
} 

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const siginAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => {
  await signOut(auth)
};

export const onAuthUserChangeListener = (nextStep) => onAuthStateChanged(auth, nextStep, null, null);