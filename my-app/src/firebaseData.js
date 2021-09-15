
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDLZjAabRO49mTQeDHk8X2TTKQp0v8pFbU",
    authDomain: "ecommerce-e7978.firebaseapp.com",
    projectId: "ecommerce-e7978",
    storageBucket: "ecommerce-e7978.appspot.com",
    messagingSenderId: "68083859410",
    appId: "1:68083859410:web:b47f92cf8437a1c3d3120b",
    measurementId: "G-WPFPTBKYBT"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app)
export default db;