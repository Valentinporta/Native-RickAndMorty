import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../components/home/Home'
import CharDetails from '../components/charDetails/CharDetails'
import { AuthContext } from '../context/AuthProvider';

const Stack = createStackNavigator()

const HomeStack = () => {
    const { dark } = useContext(AuthContext)
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
                    backgroundColor: dark ? '#97CE4C' : '#B7E4F9FF',
                    height: 60
                },
                headerTitleStyle: {
                    fontSize: 24,
                    color: 'black'
                },
                headerLeft: () => null
            }}/>
        </Stack.Navigator>
    )
}

export default HomeStack
