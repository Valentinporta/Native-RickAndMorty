import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

const LandingPage = ({ handlePress }) => {
    return (
        <View style={styles.container}>

            <Image style={styles.image} source={{uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c50a4a55883023.5996f8afa3f5c.gif'}}/>
            
            <TouchableOpacity onPress={handlePress} style={styles.btn}>
                <Text style={styles.text}>Enter</Text>
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
        resizeMode: 'contain'
    },
    btn: {
        position: 'absolute',
        bottom: 50,
        left: '30%',
        borderWidth: 3,
        borderColor: '#97CE4C',
        borderRadius: 50,
        paddingRight: 20,
        paddingLeft: 20,
    },
    text: {
        color: '#97CE4C',
        fontSize: 50
    }
})

export default LandingPage
