import React, { useState } from 'react';
import Signup from './components/signup/Signup';
import HomeScreen from './routes/HomeScreen';
import LandingPage from './routes/LandingPage';

const App = () => {
  const [enter, setEnter] = useState(false)

  const handlePress = () => {
    setEnter(true)
  }
{/* <LandingPage handlePress={handlePress}/> */}
  if (enter) {
    return (
      <HomeScreen />
    );
  } else {
    return (
      
      <Signup />
    )
  }
}

export default App
