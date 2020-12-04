import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDTdzZwoQN7LE2kdh-Om7Kkax2YG5BZts0",
    authDomain: "siap-mas.firebaseapp.com",
    projectId: "siap-mas",
    storageBucket: "siap-mas.appspot.com",
    messagingSenderId: "1040599508602",
    appId: "1:1040599508602:web:c2ae12c082ec5fc70fbdc3",
    measurementId: "G-X0JCJM8B3N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;