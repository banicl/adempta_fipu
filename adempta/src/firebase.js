import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyATHTu2tcZnERRuoCnHNtrkm0ZdajQFoag",
    authDomain: "fipu-adempta.firebaseapp.com",
    projectId: "fipu-adempta",
    storageBucket: "fipu-adempta.appspot.com",
    messagingSenderId: "1030666687123",
    appId: "1:1030666687123:web:c19630a7a8c992e9abb366"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let storage = firebase.storage();

export { firebase, db, storage };