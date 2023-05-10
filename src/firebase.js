// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAn1PQrTNE9LCt1VlwYwkntF4C0wWUHq90",
    authDomain: "twotolearn.firebaseapp.com",
    projectId: "twotolearn",
    storageBucket: "twotolearn.appspot.com",
    messagingSenderId: "31068251876",
    appId: "1:31068251876:web:30e6f1ff2e612bd39f6ef1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export default app;