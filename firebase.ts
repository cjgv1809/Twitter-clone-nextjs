// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-FCR48hEMPQgxsU4252JapIy1RZTeVRE",
  authDomain: "twitter-clone-7e5b2.firebaseapp.com",
  projectId: "twitter-clone-7e5b2",
  storageBucket: "twitter-clone-7e5b2.appspot.com",
  messagingSenderId: "393718715536",
  appId: "1:393718715536:web:1977bb7d942dbd8795b415",
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
