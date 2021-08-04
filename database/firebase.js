import firebase from 'firebase'

// With this we can access the Firebase auth services via its API
const firebaseConfig = {
    apiKey: "AIzaSyCh8oQHG9il36hDNvqEnFELQpoC9idWGps",
    authDomain: "rick-and-morty-native.firebaseapp.com",
    projectId: "rick-and-morty-native",
    storageBucket: "rick-and-morty-native.appspot.com",
    messagingSenderId: "422257364045",
    appId: "1:422257364045:web:465ac7f9193b2f5656e004"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  export const db = firebase.firestore()

  export default firebase
