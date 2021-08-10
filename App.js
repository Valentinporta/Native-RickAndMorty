import React, { useState } from 'react';
import HomeScreen from './routes/HomeScreen';
import firebase from './database/firebase'
import LandingScreen from './routes/LandingScreen';
import { AuthProvider } from './context/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  })

  return (
    <NavigationContainer>

      <AuthProvider>

        { loggedIn ? <HomeScreen /> : <LandingScreen />}

      </AuthProvider>
      
    </NavigationContainer>
  )
}

export default App
