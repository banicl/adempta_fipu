import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCRghnWl0eIPfXwu7PBSbc_dS7TdzHll2w",
    authDomain: "adempta-fipu-960af.firebaseapp.com",
    projectId: "adempta-fipu-960af",
    storageBucket: "adempta-fipu-960af.appspot.com",
    messagingSenderId: "460363423744",
    appId: "1:460363423744:web:f5073d8f37b7c6e35178e5"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let storage = firebase.storage();

export { firebase, db, storage };