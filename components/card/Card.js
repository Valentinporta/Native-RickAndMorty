import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

const Card = (props) => {
    // Will receive img, title through props for now
    return (
        <View style={styles.container}>
        
            <View>
                <Image source={{uri: props.image}} style={styles.poster} />
            </View>

            <View style={styles.textContainer}>
                <Text style={(props.name.length > 20 ? styles.longText : styles.text)}>{props.name}</Text>
            </View>
            
        
        </View>
    )
}

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingTop: 10,
    },
    poster: {
        resizeMode: 'contain',
        height: 150,
        width: width / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        color: '#97CE4C',
        fontSize: 20
    },
    longText: {
        fontSize: 16,
        color: '#97CE4C',
        textAlign: 'center'
    }
})

export default Card
