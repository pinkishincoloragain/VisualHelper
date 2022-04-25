import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
  projectId: "locationblog-a7fe4",
  storageBucket: "locationblog-a7fe4.appspot.com",
  messagingSenderId: "211676917139",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-BN5V28XJ4E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
