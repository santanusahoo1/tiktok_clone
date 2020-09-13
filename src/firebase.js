import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBz195HkP2CoW6CJ5jJslxM6GcwfvhVWD8",
    authDomain: "tik-tok-clone-a0fb5.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-a0fb5.firebaseio.com",
    projectId: "tik-tok-clone-a0fb5",
    storageBucket: "tik-tok-clone-a0fb5.appspot.com",
    messagingSenderId: "993457067759",
    appId: "1:993457067759:web:b63ce15d0aa679e9f0ed1a",
    measurementId: "G-PFV46G6XZR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;