import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Navbar = () => {
    return (
        <View style={styles.container}>
        
            <View style={styles.logo}>
                <AntDesign name='dingding' size={30} color='black' />
            </View>

            <View style={styles.user}>
                <AntDesign name='user' size={30} color='black' />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#97CE4C',
        width: '100%',
    },
    logo: {
        paddingLeft: 20
    },
    user: {
        paddingRight: 20
    }
})

export default Navbar
