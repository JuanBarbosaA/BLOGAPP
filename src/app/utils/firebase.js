// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-49594.firebaseapp.com",
  projectId: "blog-49594",
  storageBucket: "blog-49594.firebasestorage.app",
  messagingSenderId: "319852528394",
  appId: "1:319852528394:web:2a0e7ada18b8a4be43f0f3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);