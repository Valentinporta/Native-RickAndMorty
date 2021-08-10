import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorites from '../components/favorites/Favorites'
import CharDetails from '../components/charDetails/CharDetails'

const Stack = createStackNavigator()

const FavoritesStack = () => {
    return (
        <Stack.Navigator initialRouteName='SearchScreen'>
            <Stack.Screen name='SearchScreen' component={Favorites} options={{
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
                    backgroundColor: '#97CE4C',
                    height: 60
                },
                headerTitleStyle: {
                    fontSize: 24
                },
                headerLeft: () => null
            }}/>
        </Stack.Navigator>
    )
}

export default FavoritesStack
