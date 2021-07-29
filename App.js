import React, { useState } from 'react';
import HomeScreen from './routes/HomeScreen';
import LandingPage from './routes/LandingPage';

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
