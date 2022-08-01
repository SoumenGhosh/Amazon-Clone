// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA144qEtUrRxnaU1IZSxOeJzbGNTZL8--4",
    authDomain: "challenge-13e9d.firebaseapp.com",
    projectId: "challenge-13e9d",
    storageBucket: "challenge-13e9d.appspot.com",
    messagingSenderId: "327625101913",
    appId: "1:327625101913:web:e0f5de741d8ca3d33e1748",
    measurementId: "G-S92FM4RSE5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};