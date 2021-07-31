import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ErrorMsg = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sorry!</Text>
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
        color: '#97CE4C',
        fontSize: 50,
        textAlign: 'center',
    }
})

export default ErrorMsg
