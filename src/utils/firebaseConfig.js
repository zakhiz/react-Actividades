// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu1fonbYmYYgwlwGBTrR08HP3EQy4h4Qs",
  authDomain: "vvshop-df94d.firebaseapp.com",
  projectId: "vvshop-df94d",
  storageBucket: "vvshop-df94d.appspot.com",
  messagingSenderId: "213671550198",
  appId: "1:213671550198:web:748f94880bd353fa7de0d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
