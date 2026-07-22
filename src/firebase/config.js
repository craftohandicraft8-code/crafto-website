import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGPuYAgfgPLvXBUWhZJv63zUxFWnzb6Gs",
  authDomain: "crafto-store.firebaseapp.com",
  projectId: "crafto-store",
  storageBucket: "crafto-store.firebasestorage.app",
  messagingSenderId: "951489672066",
  appId: "1:951489672066:web:44f9f8d42a6202d176959b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);