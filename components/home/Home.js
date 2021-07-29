import React, { useState, useCallback, useRef } from 'react'
import { View, Text, StyleSheet, RefreshControl, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import axios from 'axios'
import Navbar from '../navbar/Navbar'
import AppLoading from 'expo-app-loading'
import Card from '../card/Card'
import { useScrollToTop } from '@react-navigation/native'

/*
--------------------TODO------------------------------------------------------
Character details screen to display more info onPress on a character
Use localstorage to save favorites and user account info on login
*/


// Will display a list of movies vertically for now
const Home = ({navigation}) => {
    const [characters, setCharacters] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const ref = useRef(null)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 1500)
    })

    const handleRequest = async () => {
        await axios.get('https://rickandmortyapi.com/api/character').then(res => {
            const response = res.data.results.map(char => ({
                name: char.name,
                image: char.image,
                id: char.id
            }))
            setCharacters(response)
        })
    }

    // By clicking on Home icon tab, it scrolls to the top of the page
    useScrollToTop(ref)

    if (loaded) {
        return (
            
            <View style={styles.container}>

                <Navbar />

                <Text style={styles.title}>Character List</Text>
                <ScrollView ref={ref} contentContainerStyle={styles.cardList} refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }>

                {characters.map(item => (
                    <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Character Information')}>
                        <Card name={item.name} image={item.image} />
                    </TouchableOpacity>
                    )
                )}
                
                </ScrollView>
            </View>
        )
    } else {
        return (
            <AppLoading
                startAsync={() => handleRequest()}
                onFinish={() => setLoaded(true)}
                onError={() => console.warn}
            />
        )
    }
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
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: '#97CE4C'
    }
})

export default Home
