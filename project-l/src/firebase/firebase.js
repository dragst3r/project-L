import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBNRdKiKzuQewf9uimuR7B4Ov1_ZQmvzc4",
  authDomain: "lysta-8f2b7.firebaseapp.com",
  projectId: "lysta-8f2b7",
  storageBucket: "lysta-8f2b7.appspot.com",
  messagingSenderId: "679002661728",
  appId: "1:679002661728:web:aa64342e79ba06eeb37405",
};
firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth()

export const  signInWithGoogle = () => {
  firebase
    .auth().signInWithPopup(provider)
    .then((result) => result.user)
    .catch((error) => console.error(error));
};