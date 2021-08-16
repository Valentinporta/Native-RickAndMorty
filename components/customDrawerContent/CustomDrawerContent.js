import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React, { useContext } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { AuthContext } from '../../context/AuthProvider'


const CustomDrawerComponent = (props) => {
    const { dark, logOut, toggle, setUser } = useContext(AuthContext)
    return (
        <View style={[styles.drawer, dark ? {backgroundColor: '#97CE4C'} : {backgroundColor: '#B7E4F9FF'}]}>
            <DrawerContentScrollView {...props}>
                <DrawerItem 
                    label={ dark ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
                    labelStyle={ dark ? {color: 'black'} : {color: 'black'}}
                    onPress={() => toggle()}
                />
                <DrawerItem 
                    label='Log Out'
                    labelStyle={dark ? {color: 'black'} : {color: 'black'}}
                    onPress={async() => {await logOut(); await setUser(null)}}
                />
            </DrawerContentScrollView>
        </View>
    )
}

const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
    drawer: {
        height: height,
    }
})

export default CustomDrawerComponent
