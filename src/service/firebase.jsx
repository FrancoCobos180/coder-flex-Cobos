// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiamDD1ITwiwVVlwwfwgDhVjFlYOhWJDM",
  authDomain: "dec-hogar.firebaseapp.com",
  projectId: "dec-hogar",
  storageBucket: "dec-hogar.appspot.com", 

  messagingSenderId: "746757528806",
  appId: "1:746757528806:web:20395e753dd2377782ef27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);