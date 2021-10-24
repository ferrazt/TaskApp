import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "Sua API key firebase",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
