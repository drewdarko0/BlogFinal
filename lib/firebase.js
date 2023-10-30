// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBFA8H6LMNLCdbAK5djb48kaiToVFqJtks",

  authDomain: "mcc2134-final-andrewlarson.firebaseapp.com",

  projectId: "mcc2134-final-andrewlarson",

  storageBucket: "mcc2134-final-andrewlarson.appspot.com",

  messagingSenderId: "256394293671",

  appId: "1:256394293671:web:b17de144de3b1d5da54682"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,
    db
}