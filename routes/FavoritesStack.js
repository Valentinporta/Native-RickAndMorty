import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorites from '../components/favorites/Favorites'
import CharDetails from '../components/charDetails/CharDetails'
import { AuthContext } from '../context/AuthProvider'

const Stack = createStackNavigator()

const FavoritesStack = () => {
    const { dark } = useContext(AuthContext)
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
                    backgroundColor: dark ? '#97CE4C' : '#B7E4F9FF',
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
