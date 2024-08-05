// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ3d-qa8l0j1xiRHLixwpYQrPZJ1OIges",
  authDomain: "pantry-tracker-937d3.firebaseapp.com",
  projectId: "pantry-tracker-937d3",
  storageBucket: "pantry-tracker-937d3.appspot.com",
  messagingSenderId: "487637147664",
  appId: "1:487637147664:web:a52a71b4fd6d843fe7ea95",
  measurementId: "G-0JXE0X685Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore }