import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LandingPage from './LandingPage'
import Signup from '../components/signup/Signup'
import Login from '../components/login/Login'
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator()

const LandingStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Landing' component={LandingPage} options={{
                headerStyle: {
                    height: 0
                },
                title: null,
                headerTitleStyle: {
                    display: 'none'
                }
            }} />
            <Stack.Screen name='SignUp' component={Signup} options={{
                headerStyle: {
                    height: 0
                },
                headerTitleStyle: {
                    display: 'none'
                },
                headerLeft: () => null
            }} />
            <Stack.Screen name='LogIn' component={Login} options={{
                headerStyle: {
                    height: 0
                },
                headerTitleStyle: {
                    display: 'none'
                },
                headerLeft: () => null
            }} />
            <Stack.Screen name='HomeTest' component={HomeScreen} options={{
                headerStyle: {
                    height: 0
                },
                headerTitleStyle: {
                    display: 'none'
                },
                headerLeft: () => null
            }} />
        </Stack.Navigator>
    )
}

export default LandingStack
