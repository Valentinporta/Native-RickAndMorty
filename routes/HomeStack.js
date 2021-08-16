import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../components/home/Home'
import CharDetails from '../components/charDetails/CharDetails'

const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={Home} options={{
                headerStyle: {
                    height: 0
                },
                headerTitleStyle: {
                    display: 'none'
                },
                headerLeft: () => null
            }}/>
            <Stack.Screen name='Character Information' component={CharDetails} options={{
                headerStyle: {
                    height: 0
                },
                headerLeft: () => null
            }}/>
        </Stack.Navigator>
    )
}

export default HomeStack
