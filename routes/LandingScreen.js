import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import LandingStack from './LandingStack';

const Stack = createStackNavigator()

const LandingScreen = () => {
    return (
        <NavigationContainer>
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
        </NavigationContainer>
    )
}

export default LandingScreen
