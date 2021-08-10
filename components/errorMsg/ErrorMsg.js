import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { AuthContext } from '../../context/AuthProvider'
const ErrorMsg = () => {
    const { dark } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Text style={[styles.text, dark ? {color: '#97CE4C'} : {color: '#B7E4F9FF'}]}>Sorry!</Text>
            <Text style={styles.text}>No characters found!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        // color: darkGreenLightBlue,
        fontSize: 50,
        textAlign: 'center',
    }
})

export default ErrorMsg
