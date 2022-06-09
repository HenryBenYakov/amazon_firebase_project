import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2ndETS4I7eKmW-FYCns1-1kT01S2W470",
  authDomain: "project-e226a.firebaseapp.com",
  projectId: "project-e226a",
  storageBucket: "project-e226a.appspot.com",
  messagingSenderId: "181775948480",
  appId: "1:181775948480:web:a2e6192a585391117dab25"
};

const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

const db = app.firestore();

export default db;