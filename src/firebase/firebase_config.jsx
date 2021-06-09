import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAQEBHL0aCix_sT29ldgeLBMcY8IatswnI",
  authDomain: "cash-register-84849.firebaseapp.com",
  projectId: "cash-register-84849",
  storageBucket: "cash-register-84849.appspot.com",
  messagingSenderId: "819246277493",
  appId: "1:819246277493:web:e2827252b4f86af92a693c",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const database = firebaseapp.firestore();

export default database;
