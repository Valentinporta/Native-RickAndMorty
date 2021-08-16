import React, { useState } from 'react';
import { AuthProvider } from './context/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './routes/Drawer';
import LandingScreen from './routes/LandingScreen';
import firebase from './database/firebase'


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  firebase.auth().onAuthStateChanged(user => {
    user ? setLoggedIn(true) : setLoggedIn(false)
  })

  return (
    <NavigationContainer>

      <AuthProvider>
      
        { loggedIn ? <Drawer /> : <LandingScreen /> }

      </AuthProvider>
      
    </NavigationContainer>
  )
}

export default App
