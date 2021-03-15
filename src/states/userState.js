import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, firestore } from '../assets/firebase';
import firebase from 'firebase/app';

const usersCollection = firestore.collection('users');

const userContext = createContext();

//shortcut hook to be able to access all functions from the context when we want
export function useAuth() {
  return useContext(userContext);
}

//useContext.Provider component that also sets the state for the rest of the App
export function UserProvider({ children }) {
  //state to keep track of the user as they sign-up/log-in
  const [user, setUser] = useState();

  //this state lets firebase check if a user has logged in before and can help us render
  //certain components correctly, if there is user already then we redirect to the questionnarre
  //otherwise we render the log-in/sign-up page
  const [loading, setLoading] = useState(true);

  //sign up through firebase api
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function registerUser(uid, firstName, lastName, school) {
    usersCollection
      .doc(uid)
      .set({
        firstName,
        lastName,
        school,
      })
      .then(function () {
        console.log('Document successfully written!');
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  }

  function addScoreToDb(uid, score, createdAt) {
    usersCollection.doc(uid).update({
      scores: firebase.firestore.FieldValue.arrayUnion({
        score,
        createdAt,
      }),
    });
  }

  // This is how you add new data to firestore
  // function p(uid, info) {
  //   usersCollection.doc(uid).update({
  //       information: info
  //   });
  //   console.log("updated info");
  // }



  /* firebase api has its own listener for when the user has signed in or not
  we only want to do this once when the sign in page is mounted, once it is 
  un mounted there is no more need for the listener */
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsub;
  }, []);

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  //these function all return promises so we need a way to wait for their result
  function logout() {
    return auth.signOut();
  }

  //useContext state to keep track of, where we also store useful functions and the user
  const defaultValue = {
    user,
    usersCollection,
    signup,
    login,
    logout,
    registerUser,
    addScoreToDb,
    
  };

  return (
    <userContext.Provider value={defaultValue}>
      {!loading && children}
    </userContext.Provider>
  );
}