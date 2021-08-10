import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { AuthContext } from '../../context/AuthProvider'


const Card = (props) => {
    const { dark } = useContext(AuthContext)
    return (
        <TouchableOpacity key={props.unique} onPress={props.onPress} style={[styles.container, dark ? {backgroundColor: 'black'} : {backgroundColor: 'white'}]}>
        
            <View>
                <Image source={{uri: props.image}} style={styles.poster} />
            </View>

            <View style={styles.textContainer}>
                <Text
                    style={props.name.length > 16 ? [styles.longText, dark ? {color: '#97CE4C'} : {color: 'black'}] : [styles.text, dark ? {color: '#97CE4C'} : {color: 'black'}]}
                >
                    {props.name}
                </Text>
            </View>
            
        
        </TouchableOpacity>
    )
}

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        width: width / 2
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
        fontSize: 20
    },
    longText: {
        fontSize: 16,
        textAlign: 'center',
        flexShrink: 1
    },
})

export default Card
