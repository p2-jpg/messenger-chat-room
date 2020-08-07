import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGESLceeBESF9lH1emiLTqxZ2UML7MEGo",
  authDomain: "messenger-room-5ef1d.firebaseapp.com",
  databaseURL: "https://messenger-room-5ef1d.firebaseio.com",
  projectId: "messenger-room-5ef1d",
  storageBucket: "messenger-room-5ef1d.appspot.com",
  messagingSenderId: "1082565390477",
  appId: "1:1082565390477:web:2978d60955db75b9b8b2c4",
  measurementId: "G-LHRJ43F9X1",
});

const db = firebaseApp.firestore();

export default db;
