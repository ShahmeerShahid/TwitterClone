

import firebase from 'firebase/app';
import 'firebase/auth';




const firebaseConfig = {
    apiKey: "AIzaSyCmlxNbE60WOJkPsCNZX4JI5fhH9_6yb9M",
    authDomain: "htc-prac.firebaseapp.com",
    projectId: "htc-prac",
    storageBucket: "htc-prac.appspot.com",
    messagingSenderId: "975546847209",
    appId: "1:975546847209:web:e3e750335bae6f33948578",
    measurementId: "G-C4HT735KCM"
  };


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

