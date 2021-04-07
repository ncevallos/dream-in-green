import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, firestore } from '../assets/firebase';
import defaultProfileImage from '../images/default-profile-img.jpg';
import firebase from 'firebase/app';
import 'firebase/storage';
import imageCompression from 'browser-image-compression';


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
      average: 100
    });
  }


  const [profilePic, setProfilePic] = useState(defaultProfileImage);

 //Uploads the file to the firebase 
 const uploadProfilePic = (file) => {
  //Forces the image to be saved as a jpeg in firebase
  const cacheControl = {
    contentType: 'image/jpeg',
    customMetadata: {
      userId: user.uid
    }
  }   

  const imageFile = file.target.files[0];
  const options = {
    maxSizeMB: 0.1,
    maxWidthOrHeight: 1080,
    useWebWorker: true
    
  }
  console.log('hittt');
  /*
    The first parameter is the image we are compressing and the second parameter are the settings we chose for compressing the image
    The ref() parameter is what we are setting the path of the users profile picture in our firebase bucket
  */
  imageCompression(imageFile, options).then( (compressedFile) => {
    firebase.storage().ref('users/'+ user.uid + '/profile.jpg').put(compressedFile, cacheControl).then( () => {
      console.log("Successfully uploaded image")
    }).catch(error => {
      console.log("Error uploading image: " + error);
    });
  })
  
  //Sets the profilePic state to the local file the first time it's uploaded. Everytime after that it will be fetched from firebase with the downloadProfilePic() method
  setProfilePic(URL.createObjectURL(imageFile));
}

  const downloadProfilePic = (user) => {
    firebase.storage().ref('users/'+ user.uid + '/profile.jpg').getDownloadURL()
    .then(imgURL => {
      console.log("successfully downloaded profile picture");
      setProfilePic(imgURL);
    }).catch(error => {
      console.log('error img ' + error);
      setProfilePic(defaultProfileImage);
    })
  }

  /* firebase api has its own listener for when the user has signed in or not
  we only want to do this once when the sign in page is mounted, once it is 
  un mounted there is no more need for the listener */
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      downloadProfilePic(user);
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
    profilePic,
    signup,
    login,
    logout,
    registerUser,
    addScoreToDb,
    uploadProfilePic,
  };

  return (
    <userContext.Provider value={defaultValue}>
      {!loading && children}
    </userContext.Provider>
  );
}