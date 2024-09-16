import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCuUA7T3ESvJdB0X_Ec1l8FfKdtLr_HWEE",
  authDomain: "chatapp-react-7982e.firebaseapp.com",
  projectId: "chatapp-react-7982e",
  storageBucket: "chatapp-react-7982e.appspot.com",
  messagingSenderId: "630333219303",
  appId: "1:630333219303:web:20b24fde07f5124d091d42",
  measurementId: "G-54GK1R01HS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const db=getFirestore()
export const storge=getStorage()

