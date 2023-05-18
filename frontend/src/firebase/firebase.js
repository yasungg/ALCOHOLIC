// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARF0uYNP09lzIjf9oWiWe4qsDpo1SYW_c",
  authDomain: "alcoholic-fe3c8.firebaseapp.com",
  projectId: "alcoholic-fe3c8",
  storageBucket: "alcoholic-fe3c8.appspot.com",
  messagingSenderId: "858627432252",
  appId: "1:858627432252:web:e4b4b028c7d0b13cc50839",
  measurementId: "G-FWQY6ZTGNC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();