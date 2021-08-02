import React from 'react';
import HomeScreen from './routes/HomeScreen';
import firebase from './database/firebase'
import LandingScreen from './routes/LandingScreen';

// Set landing page as default screen, ask if user is signed in, if false show landing page, if true show homescreen
// Validations
const App = () => {

  const user = firebase.auth().currentUser

  if (user) {
    return (
      <HomeScreen />
    );
  } else {
    return (
      <LandingScreen />
    )
  }
}

export default App
