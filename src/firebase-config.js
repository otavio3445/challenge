import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAQXw5FAmALWpQYwHG6EVTMNpZk-5nWbJQ",
    authDomain: "bd-challenge-7729a.firebaseapp.com",
    projectId: "bd-challenge-7729a",
    storageBucket: "bd-challenge-7729a.appspot.com",
    messagingSenderId: "578393828039",
    appId: "1:578393828039:web:e99ac08ac946c7d5316ce2"
  };

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const bd_users = collection(firestore, "users");
const bd_recs = collection(firestore, "recs");

export async function getUsersFB() {
    const users = await getDocs(bd_users);
    return users
  }
export async function getRecFB() {
    const users = await getDocs(bd_recs);
    return users
  }
export const db = getFirestore(app);