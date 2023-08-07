// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEE_PolSt7Se-J96v-dba0aWirOiXMRZ4",
  authDomain: "vite-contacts-9919a.firebaseapp.com",
  projectId: "vite-contacts-9919a",
  storageBucket: "vite-contacts-9919a.appspot.com",
  messagingSenderId: "434782748945",
  appId: "1:434782748945:web:c8354691df272cca1e4cb0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
