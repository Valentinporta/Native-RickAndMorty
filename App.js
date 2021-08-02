import React, { useState } from 'react';
import HomeScreen from './routes/HomeScreen';
import LandingPage from './routes/LandingPage';

// Set landing page as default screen, ask if user is signed in, if false show landing page, if true show homescreen
// Validations
const App = () => {
  const [enter, setEnter] = useState(false)

  const handlePress = () => {
    setEnter(true)
  }

  if (enter) {
    return (
      <HomeScreen />
    );
  } else {
    return (
      <LandingPage handlePress={handlePress}/>
    )
  }
}

export default App
