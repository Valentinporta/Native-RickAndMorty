import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
    const { logOut } = useContext(AuthContext)
    return (
        <View style={styles.container}>
        
            <View style={styles.logo}>
                <AntDesign name='dingding' size={30} color='black' />
            </View>

            <TouchableOpacity style={styles.user} onPress={async () => await logOut()}>
                <AntDesign name='user' size={30} color='black' />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
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
