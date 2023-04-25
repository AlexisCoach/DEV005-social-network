import { db, collection, addDoc, getDocs, onSnapshot, orderBy, query } from '../firebase/firestore'

//asigno mi colección a una variable
const postsCollection = collection(db, 'posts')

export const addPost = (comment) => {
  addDoc(postsCollection, {
      comment,
      date: Date.now()
    });
}

export const querySnapshot = getDocs(postsCollection);

export const paintRealTime = (callback) => onSnapshot(query(postsCollection, orderBy('date', 'desc')), callback)
