// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh9pOa9B4rde0nayr311pXysZ2zromCVY",
  authDomain: "fir-naukri.firebaseapp.com",
  projectId: "fir-naukri",
  storageBucket: "fir-naukri.appspot.com",
  messagingSenderId: "75827925233",
  appId: "1:75827925233:web:f1bc911e49138d555b1950"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}