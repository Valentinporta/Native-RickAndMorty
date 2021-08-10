import { useScrollToTop } from '@react-navigation/native'
import React, { useRef, useContext } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import Navbar from '../navbar/Navbar'
import { AuthContext } from '../../context/AuthProvider'
import Card from '../card/Card'

const Favorites = ({ navigation }) => {
    const ref = useRef(null)
    const { favorites, dark } = useContext(AuthContext)

    useScrollToTop(ref)
    return (
        <View style={[styles.container, dark ? {backgroundColor: 'black'} : {backgroundColor: 'white'}]}>
            <Navbar />
            <Text style={[styles.title, dark ? {color: '#97CE4C'} : {color: '#B7E4F9FF'}]}>Favorites List</Text>
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
        width: width,
        height: '100%',
    },
    cardList: {
        width: width,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
    }
})

export default Favorites
