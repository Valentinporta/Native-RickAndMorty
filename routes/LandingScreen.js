import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LandingStack from './LandingStack';

const Stack = createStackNavigator()

const LandingScreen = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='LandingStack' component={LandingStack} options={{
                headerStyle: {
                    height: 0
                },
                headerTitleStyle: {
                    display: 'none'
                },
            }} />
        </Stack.Navigator>
    )
}

export default LandingScreen
