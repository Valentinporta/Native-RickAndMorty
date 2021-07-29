import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Navbar from '../navbar/Navbar'

const Favorites = () => {
    return (
        <View style={styles.container}>
            <Navbar />
            <Text>Favorites Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%'
    }
})

export default Favorites
