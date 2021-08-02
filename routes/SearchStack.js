import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../components/search/Search'
import CharDetails from '../components/charDetails/CharDetails'

const Stack = createStackNavigator()

const SearchStack = () => {
    return (
        <Stack.Navigator initialRouteName='SearchScreen'>
            <Stack.Screen name='SearchScreen' component={Search} options={{
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
                    backgroundColor: '#97CE4C'
                },
            }}/>
        </Stack.Navigator>
    )
}

export default SearchStack
