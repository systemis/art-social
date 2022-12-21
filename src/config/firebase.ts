// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn2bh98l5MTickW3XAGRzt2YJTfzDXhc4",
  authDomain: "imaginary-marketplace.firebaseapp.com",
  projectId: "imaginary-marketplace",
  storageBucket: "imaginary-marketplace.appspot.com",
  messagingSenderId: "650430817386",
  appId: "1:650430817386:web:4a515062a0a97a7053d613",
  measurementId: "G-TZ0KYDX422",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const storage = getStorage(app);
const analytics = getAnalytics(app);

export {app, storage}