// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDO6FG2MJSO1EW4kCY2LcFtKdjacdpv3qU",
    authDomain: "airbnb-auth-599df.firebaseapp.com",
    projectId: "airbnb-auth-599df",
    storageBucket: "airbnb-auth-599df.appspot.com",
    messagingSenderId: "534967305097",
    appId: "1:534967305097:web:70b9da51d714f35fe7d758",
    measurementId: "G-537PZB6L90",
    databaseURL: "https://airbnb-auth-599df-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);