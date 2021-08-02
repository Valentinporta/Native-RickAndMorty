import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons  } from '@expo/vector-icons';
import Favorites from '../components/favorites/Favorites';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';

const Tab = createBottomTabNavigator()

const HomeScreen = () => {

    const tabBarOptions = {
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        indicatorStyle: { backgroundColor: '#00CCFF', height: '100%' },
        pressOpacity: 1,
        style: {
            backgroundColor: '#97CE4C',
        },
        labelStyle: {
            fontSize: 16
        }
      }

    return(
        <Tab.Navigator tabBarOptions={tabBarOptions}>
            <Tab.Screen name='Home' component={HomeStack} options={{
                tabBarIcon: ({focused}) => (
                    <Ionicons name="home-sharp" size={25} color={focused ? 'white' : 'black'} />
                )
            }}/>
            <Tab.Screen name='Search' component={SearchStack} options={{
                tabBarIcon: ({focused}) => (
                    <AntDesign name='search1' size={25} color={focused ? 'white' : 'black'} />
                )
            }}/>
            <Tab.Screen name='Favorites' component={Favorites} options={{
                tabBarIcon: ({focused}) => (
                    <AntDesign name='heart' size={25} color={focused ? 'white' : 'black'} />
                )
            }}/>
        </Tab.Navigator>
    )
}

export default HomeScreen
