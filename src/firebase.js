import firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: //Paste your firebase config keys here,
  authDomain: //Paste your firebase config keys here,
  databaseURL: //Paste your firebase config keys here,
  projectId: //Paste your firebase config keys here,
  storageBucket: //Paste your firebase config keys here,
  messagingSenderId: //Paste your firebase config keys here,
  appId: //Paste your firebase config config keys here,
  measurementId: //Paste your firebase config keys here
});

const auth = firebase.auth();

export { auth };
export { firebaseApp };
