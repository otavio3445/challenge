import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, updateDoc, doc } from '@firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from '@firebase/storage';

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
const storage = getStorage(app, "gs://bd-challenge-7729a.appspot.com");
const bd_users = collection(firestore, "users");
const bd_recs = collection(firestore, "recs");
const bd_vagas = collection(firestore, "vagas");
const bd_cursos = collection(firestore, "cursos");

export async function getUsersFB() {
  const users = await getDocs(bd_users);
  return users
}

export async function getVagasFB() {
  const users = await getDocs(bd_vagas);
  return users
}

export async function getcursosFB() {
  const users = await getDocs(bd_cursos);
  return users
}

export async function getRecFB() {
  const users = await getDocs(bd_recs);
  return users
}

export async function uploadImage(cpf, file) {
  const imagesRef = ref(storage, cpf);
  await uploadBytes(imagesRef, file).then((snap) => {
    console.log('File Uploaded');
  }).catch(err => console.log(err))
}

export async function getUrlImg(cpf) {
  const imagesRef = ref(storage, cpf);
  return await getDownloadURL(imagesRef).then(url => url)
}

export async function updateDocFB(id, data) {
  const document = doc(firestore, "users", id)
  await updateDoc(document, data);
}
export const db = getFirestore(app);