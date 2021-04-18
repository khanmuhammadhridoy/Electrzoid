import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

// Google SignIn
export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      const { displayName, email, photoURL } = res.user;
      const signedInUser = {
        displayName: displayName,
        email: email,
        img: photoURL,
      };
      return signedInUser;
    })
    .catch((err) => {});
};

// update User Name
export const updateUserName = (name) => {
  const user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: name,
  });
};
