import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyC8xVxNTbC4AgadHBD2hOireM0juS9BWQQ",
  authDomain: "protfolio-91755.firebaseapp.com",
  projectId: "protfolio-91755",
  storageBucket: "protfolio-91755.firebasestorage.app",
  messagingSenderId: "6946674912",
  appId: "1:6946674912:web:ffc08c8cfb84cc57135885",
  measurementId: "G-PFVL81NFZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
