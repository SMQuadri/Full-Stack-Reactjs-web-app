import firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA2uivjDQJgQ4wHyGtpwftAD8YoUN6GoHA",
  authDomain: "netflix-10001.firebaseapp.com",
  databaseURL: "https://netflix-10001.firebaseio.com",
  projectId: "netflix-10001",
  storageBucket: "netflix-10001.appspot.com",
  messagingSenderId: "891883150684",
  appId: "1:891883150684:web:ae51518c7131858a51b599",
  measurementId: "G-B93DD7FYPQ"
});

const auth = firebase.auth();

export { auth };
export { firebaseApp };