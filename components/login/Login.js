import React, { useState, useContext } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, Dimensions } from 'react-native';
import { AuthContext } from '../../context/AuthProvider'

const Login = ({ navigation }) => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
        isLoading: false
    })

    const { logIn } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <TextInput onChangeText={val => setUserInfo({...userInfo, email: val})} value={userInfo.email} placeholderTextColor='#97CE4C' placeholder='Email' style={styles.input} />
            <TextInput onChangeText={val => setUserInfo({...userInfo, password: val})} value={userInfo.password} placeholderTextColor='#97CE4C' secureTextEntry={true} placeholder='Password' style={styles.input} />
            <Button onPress={() => { logIn(userInfo.email, userInfo.password); navigation.navigate('HomeScreen')}} title='Log in' color='#97CE4C' />
        </View>
    )
}

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'black'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#97CE4C',
        textAlign: 'left',
        width: width - 100,
        paddingBottom: 10,
        paddingTop: 10,
        marginBottom: 10,
        color: '#97CE4C'
    },
})

export default Login