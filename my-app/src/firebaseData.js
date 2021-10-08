// import firebase from 'firebase/app'
// import 'firebase/compat/auth'
// import 'firebase/auth'
// import firebase from 'firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
// require('firebase/auth')
// import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDfHqgf1a2_yL3_y3QI3Pf4kp75zFds4NA",
    authDomain: "buyingandselling-e16cd.firebaseapp.com",
    projectId: "buyingandselling-e16cd",
    storageBucket: "buyingandselling-e16cd.appspot.com",
    messagingSenderId: "983481330166",
    appId: "1:983481330166:web:cdcadc91f3276df5e93fd7",
    measurementId: "G-EG4R29QYQL"
};
export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(app)
export const storage = firebase.storage()
export const auth = firebase.auth(app)

