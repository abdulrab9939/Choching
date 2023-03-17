import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMthH6U6hl6comyuAgwVZoo9vaDbMYM5I",
  authDomain: "coching-8bd2d.firebaseapp.com",
  projectId: "coching-8bd2d",
  storageBucket: "coching-8bd2d.appspot.com",
  messagingSenderId: "775524170899",
  appId: "1:775524170899:web:494fe5ac1c237e34bc2166"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export const db = getFirestore(app);
export {auth,app};