import { useScrollToTop } from '@react-navigation/native'
import React, { useRef, useContext } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import Navbar from '../navbar/Navbar'
import { AuthContext } from '../../context/AuthProvider'
import Card from '../card/Card'

const Favorites = ({ navigation }) => {
    const ref = useRef(null)
    const { favorites } = useContext(AuthContext)

    useScrollToTop(ref)
    return (
        <View style={styles.container}>
            <Navbar />
            <Text style={styles.title}>Favorites List</Text>
            <FlatList
                ref={ref}
                data={favorites}
                renderItem={({ item }) => (
                    <Card
                        unique={item.id}
                        onPress={() => navigation.navigate('Character Information', item)}
                        name={item.name}
                        image={item.image}
                    />
                )}
                key={({ item }) => item.id}
                contentContainerStyle={styles.cardList}
                numColumns={2}
            />
        </View>
    )
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        width: width,
        height: '100%',
    },
    cardList: {
        width: width,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: '#97CE4C'
    }
})

export default Favorites
