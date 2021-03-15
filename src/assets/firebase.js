import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWBwCa9Yu8pWtvFGAUurXcdLtYSjW1n7s",
  authDomain: "dream-in-green.firebaseapp.com",
  databaseURL: "https://dream-in-green.firebaseio.com",
  projectId: "dream-in-green",
  storageBucket: "dream-in-green.appspot.com",
  messagingSenderId: "700392683631",
  appId: "1:700392683631:web:2b5368d6991c9dba95b59a"
};
// Initialize Firebase

const firebaseConn = firebase.initializeApp(firebaseConfig);

export const auth = firebaseConn.auth();
export const firestore = firebase.firestore();
export default firebaseConn;











