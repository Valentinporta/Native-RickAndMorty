import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { AntDesign  } from '@expo/vector-icons'

const CharDetails = ({ route }) => {
    const [fav, setFav] = useState(false)
    const {image, name, species, gender, status, origin} = route.params

    const handleFav = () => {
        // I need to receive a CB to add and remove the char from list of favorites state
        setFav(prev => !prev)
    }

    return (
        <View style={styles.container}>
        
            <View style={styles.charInfo}>
                <AntDesign
                    name="heart"
                    size={34}
                    color={fav ? 'red' : 'white'}
                    style={styles.icon}
                    onPress={handleFav}
                />
                <Image source={{uri: image}} style={styles.img} />
                <Text style={styles.name}>Name:</Text>       
                <Text style={styles.text}>{name}</Text>       
                <Text style={styles.text}>Species: {species}</Text>            
                <Text style={styles.text}>Gender: {gender}</Text>            
                <Text style={styles.text}>Status: {status}</Text>            
                <Text style={styles.text}>Origin: {origin}</Text>           
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    charInfo: {
        borderWidth: 2,
        borderColor: '#97CE4C',
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#97CE4C',
        maxWidth: 250,
        flexWrap: 'wrap'
    },
    text: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        flexWrap: 'wrap',
        maxWidth: 200,
        paddingBottom: 5
    },
    name: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 10
    },
    img: {
        height: 200,
        width: 200
    },
    icon: {
        position: 'absolute',
        zIndex: 2
    }
})

export default CharDetails