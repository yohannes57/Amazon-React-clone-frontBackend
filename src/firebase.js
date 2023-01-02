// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// //

// const firebaseConfig = {
//   apiKey: "AIzaSyBUlyOwrGOiokDRwW-B2wIn7p-YG2uK66w",
//   authDomain: "clone-yd.firebaseapp.com",
//   projectId: "clone-yd",
//   storageBucket: "clone-yd. .com",
//   messagingSenderId: "14216964314",
//   appId: "1:14216964314:web:0ba7ebd9225ba59ada5de3",
//   measurementId: "G-GD5XKSBYY6",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBUlyOwrGOiokDRwW-B2wIn7p-YG2uK66w",
  authDomain: "clone-yd.firebaseapp.com",
  projectId: "clone-yd",
  storageBucket: "clone-yd.appspot.com",
  messagingSenderId: "14216964314",
  appId: "1:14216964314:web:0ba7ebd9225ba59ada5de3",
  measurementId: "G-GD5XKSBYY6",
};

//initialize firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseapp.firestore();
export { db, auth };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export default app;
