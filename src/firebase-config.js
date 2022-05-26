import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSsbR7F0P87jtvmsvNZCoNox6FvbYZubU",
    authDomain: "challenge-41735.firebaseapp.com",
    projectId: "challenge-41735",
    storageBucket: "challenge-41735.appspot.com",
    messagingSenderId: "229162669931",
    appId: "1:229162669931:web:b076f749409023caecde2e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);