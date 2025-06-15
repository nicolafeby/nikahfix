import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDM1bxzszodbxbnmcUDWbC1X7aYIMug_W4",
  authDomain: "nikahfix-9a384.firebaseapp.com",
  projectId: "nikahfix-9a384",
  storageBucket: "nikahfix-9a384.appspot.com", // ✅ FIXED
  messagingSenderId: "1030253305745",
  appId: "1:1030253305745:web:251156b5f0ff45d2e98430",
  measurementId: "G-DXK0V5GXFZ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
