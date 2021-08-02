import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Dimensions, Alert } from 'react-native'
import firebase from '../../database/firebase'


const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
        isLoading: false
      })

    const createUser = () => {
        if (!userInfo.email && !userInfo.password) {
            Alert.alert('Please enter email and password!')
        } else {
            setUserInfo({
                ...userInfo,
                isLoading: true
            })
            firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
            .then(async res => {
                const user = res.user
                await user.updateProfile({
                    displayName: userInfo.username
                })
            })
            .catch(error => setUserInfo({ errorMsg: error.message}))
        }
    }

    return (
        <View style={styles.container}>
            <TextInput onChangeText={val => setUserInfo({...userInfo, username: val})} value={userInfo.username} placeholderTextColor='#97CE4C' placeholder='Username' style={styles.input} />
            <TextInput onChangeText={val => setUserInfo({...userInfo, email: val})} value={userInfo.email} placeholderTextColor='#97CE4C' placeholder='Email' style={styles.input} />
            <TextInput onChangeText={val => setUserInfo({...userInfo, password: val})} value={userInfo.password} placeholderTextColor='#97CE4C' secureTextEntry={true} placeholder='Password' style={styles.input} />
            <Button onPress={() => createUser()} title='Sign up' color='#97CE4C' />
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

export default Signup
