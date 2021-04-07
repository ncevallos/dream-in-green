import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDjMv0ujFxY0Cfei8vM3czVFPPy4f0QQQo",
  authDomain: "sparkdev-app.firebaseapp.com",
  projectId: "sparkdev-app",
  databaseURL: "https://sparkdev-app-default-rtdb.firebaseio.com/",
  storageBucket: "sparkdev-app.appspot.com",
  messagingSenderId: "1064506679967",
  appId: "1:1064506679967:web:08407ff09b1c208cc2f8aa",
  measurementId: "G-8G9ZBF1FD8"
};
// Initialize Firebase

const firebaseConn = firebase.initializeApp(firebaseConfig);

export const auth = firebaseConn.auth();
export const firestore = firebase.firestore();
export default firebaseConn;











