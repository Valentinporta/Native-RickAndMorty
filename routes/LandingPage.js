import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

const LandingPage = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Image style={styles.image} source={require('../assets/rickandmortygif.gif')}/>
            
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.signup}>
                <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('LogIn')} style={styles.login}>
                <Text style={styles.text}>Log in</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    signup: {
        position: 'absolute',
        bottom: 50,
        left: '7%',
        borderWidth: 3,
        borderColor: '#97CE4C',
        borderRadius: 50,
        paddingRight: 20,
        paddingLeft: 20,
    },
    login: {
        position: 'absolute',
        bottom: 50,
        left: '57%',
        borderWidth: 3,
        borderColor: '#97CE4C',
        borderRadius: 50,
        paddingRight: 20,
        paddingLeft: 20,
    },
    text: {
        color: '#97CE4C',
        fontSize: 40
    }
})

export default LandingPage
