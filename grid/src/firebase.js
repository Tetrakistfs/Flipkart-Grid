import firebase from 'firebase';
import {getFireStore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAPHAzhPB4U27brwu1ZTvQBmrLTbZWjeyE",
  authDomain: "grid-a3d83.firebaseapp.com",
  projectId: "grid-a3d83",
  storageBucket: "grid-a3d83.appspot.com",
  messagingSenderId: "567098514706",
  appId: "1:567098514706:web:7eabc256b94853c91ea7cb"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export const db = getFireStore();
export default fire;