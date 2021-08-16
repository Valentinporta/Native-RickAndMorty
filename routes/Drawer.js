import React, { useContext } from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from './HomeScreen';
import CustomDrawerComponent from '../components/customDrawerContent/CustomDrawerContent';
import { AuthContext } from '../context/AuthProvider';

const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {
    const { dark } = useContext(AuthContext)

    return (
        <DrawerNavigator.Navigator
            headerMode='screen'
            drawerContent={() => <CustomDrawerComponent />}
            headerStyle={{
                backgroundColor: dark ? '#97CE4C' : '#B7E4F9FF'
            }}
        >
            <DrawerNavigator.Screen name={'HomeSc'} component={HomeScreen}/>
        </DrawerNavigator.Navigator>
    )
}

export default Drawer
