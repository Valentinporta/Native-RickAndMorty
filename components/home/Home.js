import React, { useState, useCallback, useRef } from 'react'
import { View, Text, StyleSheet, RefreshControl, Dimensions, FlatList } from 'react-native'
import axios from 'axios'
import Navbar from '../navbar/Navbar'
import AppLoading from 'expo-app-loading'
import Card from '../card/Card'
import { useScrollToTop } from '@react-navigation/native'
import firebase from '../../database/firebase'

const Home = ({navigation}) => {
    const [characters, setCharacters] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const [page, setPage] = useState(1)
    const ref = useRef(null)

    const user = firebase.auth().currentUser

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 1500)
    })

    const getCharacters = async () => {
        if (page <= 34) {
            await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(res => {
                const response = res.data.results.map(char => ({
                    name: char.name,
                    image: char.image,
                    id: char.id,
                    species: char.species,
                    gender: char.gender,
                    status: char.status,
                    origin: char.origin.name
                }))
                setCharacters([...characters].concat(response))
                setPage(prev => prev + 1)
            })
        }
    }

    // By clicking on Home icon tab, it scrolls to the top of the page
    useScrollToTop(ref)

    if (loaded) {
        return (
        
            <View style={styles.container}>

                <Navbar />

                <Text style={styles.title}>Character List</Text>
                <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    ref={ref}
                    data={characters}
                    renderItem={({ item }) => (
                        <Card
                            unique={item.id}
                            onPress={() => navigation.navigate('Character Information', item)}
                            name={item.name}
                            image={item.image}
                        />
                    )}
                    key={({ item }) => item.id}
                    onEndReached={() => getCharacters()}
                    onEndReachedThreshold={0.1}
                    contentContainerStyle={styles.cardList}
                    numColumns={2}
                />
                {console.log(user)}
            </View>
        )
    } else {
        return (
            <AppLoading
                startAsync={() => getCharacters()}
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
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: '#97CE4C'
    }
})

export default Home
