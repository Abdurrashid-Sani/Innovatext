// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAotQzMnZKszxh9dlCeZx3ZBA7FwWdfTpQ",
  authDomain: "innovatext-ee21a.firebaseapp.com",
  projectId: "innovatext-ee21a",
  storageBucket: "innovatext-ee21a.appspot.com",
  messagingSenderId: "116965360883",
  appId: "1:116965360883:web:4bf7b8b8335b3f5345a386"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
