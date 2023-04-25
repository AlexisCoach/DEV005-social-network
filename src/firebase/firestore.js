import { getFirestore, collection, addDoc, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { app } from './config'

export const db = getFirestore(app);

export { collection, addDoc, getDocs, onSnapshot, orderBy, query }

