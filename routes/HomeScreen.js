import React, { useContext } from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons  } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import FavoritesStack from './FavoritesStack';
import { AuthContext } from '../context/AuthProvider';

const Tab = createBottomTabNavigator()

const HomeScreen = () => {
    const { dark } = useContext(AuthContext)
    const activeColor = dark ? 'white' : '#FAFD7CFF'

    const tabBarOptions = {
        activeTintColor: activeColor,
        inactiveTintColor: 'black',
        indicatorStyle: { backgroundColor: '#00CCFF', height: '100%' },
        pressOpacity: 1,
        style: {
            backgroundColor: dark ? '#97CE4C' : '#B7E4F9FF',
        },
        labelStyle: {
            fontSize: 16
        }
      }

    return(
        <Tab.Navigator tabBarOptions={tabBarOptions}>
            <Tab.Screen name='Home' component={HomeStack} options={{
                tabBarIcon: ({focused}) => (
                    <Ionicons name="home-sharp" size={25} color={focused ? activeColor : 'black'} />
                )
            }}/>
            <Tab.Screen name='Search' component={SearchStack} options={{
                tabBarIcon: ({focused}) => (
                    <AntDesign name='search1' size={25} color={focused ? activeColor : 'black'} />
                )
            }}/>
            <Tab.Screen name='Favorites' component={FavoritesStack} options={{
                tabBarIcon: ({focused}) => (
                    <AntDesign name='heart' size={25} color={focused ? activeColor : 'black'} />
                )
            }}/>
        </Tab.Navigator>
    )
}

export default HomeScreen
