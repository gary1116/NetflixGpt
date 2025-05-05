// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzGoVfA_L82RDQjAd68Pkr9sdITFb0tXA",
  authDomain: "netflixgpt-1812e.firebaseapp.com",
  projectId: "netflixgpt-1812e",
  storageBucket: "netflixgpt-1812e.firebasestorage.app",
  messagingSenderId: "696566282492",
  appId: "1:696566282492:web:19d4ad26378f036bf0ff79",
  measurementId: "G-CD4T0LX485"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);