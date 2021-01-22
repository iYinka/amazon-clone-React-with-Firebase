import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBW_BT8EqBzXVp0u4883lBLXH-f9k1pV7E",
    authDomain: "clone-bbef4.firebaseapp.com",
    projectId: "clone-bbef4",
    storageBucket: "clone-bbef4.appspot.com",
    messagingSenderId: "229554970717",
    appId: "1:229554970717:web:126031c7273963c791adb4",
    measurementId: "G-83WH7SKZEY"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebaseApp.auth();

  export { db, auth };