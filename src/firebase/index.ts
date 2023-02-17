// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE__API__KEY,
  authDomain: process.env.FIREBASE__AUTH__DOMAIN,
  projectId: process.env.FIREBASE__PROJECT__ID,
  storageBucket: process.env.FIREBASE__STORAGE__BUCKET,
  messagingSenderId: process.env.FIREBASE__MESSAGING__SENDER__ID,
  appId: process.env.FIREBASE__APP_ID,
  measurementId: process.env.FIREBASE__MEASUREMENT__ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
