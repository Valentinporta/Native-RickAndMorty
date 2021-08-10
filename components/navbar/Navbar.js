import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
    const { logOut, dark, toggle } = useContext(AuthContext)
    return (
        <View style={[styles.container, dark ? {backgroundColor: '#97CE4C'} : {backgroundColor: '#B7E4F9FF'}]}>
        
            <TouchableOpacity style={styles.logo} onPress={() => toggle()}>
                <AntDesign name='dingding' size={30} color='black' />
            </TouchableOpacity>

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
