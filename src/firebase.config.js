import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCsvCmykcCzzQ_xsRaqllfwZlSdeUrKnCY",
  authDomain: "restaurant-app-caa5c.firebaseapp.com",
  databaseURL: "https://restaurant-app-caa5c-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-caa5c",
  storageBucket: "restaurant-app-caa5c.appspot.com",
  messagingSenderId: "286168543481",
  appId: "1:286168543481:web:6c9058a371db6067a0b228",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
