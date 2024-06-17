// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDka2fGa6rlTseBr_QxWWYLd-8jT7L9490",
    authDomain: "todorn-19452.firebaseapp.com",
    databaseURL: "https://todorn-19452-default-rtdb.firebaseio.com",
    projectId: "todorn-19452",
    storageBucket: "todorn-19452.appspot.com",
    messagingSenderId: "597024285049",
    appId: "1:597024285049:web:e96945bbf635f5adcf4fa8",
    measurementId: "G-LN1KGSNVY3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();

export { app, db, storage, ref, getFirestore, collection, addDoc };
