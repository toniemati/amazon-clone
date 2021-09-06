import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJkcsXn8vttoXbbth9HhveJ3QpIMmkFUE",
  authDomain: "clone-d2b89.firebaseapp.com",
  projectId: "clone-d2b89",
  storageBucket: "clone-d2b89.appspot.com",
  messagingSenderId: "51831492939",
  appId: "1:51831492939:web:5924387609e9181cdc58ce",
  measurementId: "G-SBMX06HS08"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };