// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQUYUjZZwgxqHjesA2RdaFYSvROf6cQXY",
  authDomain: "netflixgpt-10f67.firebaseapp.com",
  projectId: "netflixgpt-10f67",
  storageBucket: "netflixgpt-10f67.firebasestorage.app",
  messagingSenderId: "85290250542",
  appId: "1:85290250542:web:95507610a9e3f36bc4cabf",
  measurementId: "G-C68WMK8RZ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
