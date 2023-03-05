// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgHjoUj6VBy49EqBRze6XbpmtPl1oGl_M",
  authDomain: "buildbyblock.firebaseapp.com",
  projectId: "buildbyblock",
  storageBucket: "buildbyblock.appspot.com",
  messagingSenderId: "342378647854",
  appId: "1:342378647854:web:04f15dc1c4703f3c88aabf",
  measurementId: "G-PV99WM9L32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
