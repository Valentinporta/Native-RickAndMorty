import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const CharDetails = () => {
    // Let's make this component look like a card
    // Image, name, species, gender, status, origin.name
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Text style={styles.text}>Image here</Text>
            </View>

            <View style={styles.charInfo}>
                <Text style={styles.text}>Name: </Text>            
                <Text style={styles.text}>Species: </Text>            
                <Text style={styles.text}>Gender: </Text>            
                <Text style={styles.text}>Status: </Text>            
                <Text style={styles.text}>Origin: </Text>            
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%'
    },
    text: {
        color: 'white'
    }
})

export default CharDetails
