var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");//korištenje import firestore
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyAEpu7-QvInRu6wf3v15XKTu6jgsoJYs58",
    authDomain: "adempta-81060.firebaseapp.com",
    projectId: "adempta-81060",
    storageBucket: "adempta-81060.appspot.com",
    messagingSenderId: "130191613480",
    appId: "1:130191613480:web:7e3ca22988e6209f1b5f1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default {
    firebase, //kljuc i vrijednost
};