

import firebase from 'firebase/app';
import 'firebase/auth';

import * as firebaseui from 'firebaseui'



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

const uiConfig = ({
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  })



export const auth = firebase.auth();


// This sets up firebaseui
const firebaseUI = new firebaseui.auth.AuthUI(auth);

// This adds firebaseui to the page
// It does everything else on its own
export const startFirebaseUI = function (elementId) {
  firebaseUI.start(elementId, uiConfig)
}




const provider = new firebase.auth.GoogleAuthProvider();


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

