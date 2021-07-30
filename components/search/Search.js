import { useScrollToTop } from '@react-navigation/native'
import React, { useState, useRef, useCallback } from 'react'
import { View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, RefreshControl } from 'react-native'
import Card from '../card/Card'
import Navbar from '../navbar/Navbar'
import axios from 'axios'

const Search = ({ navigation }) => {
    const [input, setInput] = useState('')
    const [characters, setCharacters] = useState({})
    const [refreshing, setRefreshing] = useState(false)
    const ref = useRef(null)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 1500)
    })

    const handleChange = async () => {
        if (input) {
            await axios.get(`https://rickandmortyapi.com/api/character/?name=${input}`).then(res => {
                const response = res.data.results.map(char => ({
                    name: char.name,
                    image: char.image,
                    id: char.id,
                    species: char.species,
                    gender: char.gender,
                    status: char.status,
                    origin: char.origin.name
                }))
                setCharacters(response)
            })
        } else {
            setCharacters({})
        }
    }

    useScrollToTop(ref)
    return (
        <View style={styles.container}>
            <Navbar />
            <Text style={styles.text}>Search for a character:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize= 'words'
                onChangeText={input => setInput(input)}
                value={input}
                placeholder='Search...'
                onSubmitEditing={handleChange}
            />
            <ScrollView
                ref={ref}
                contentContainerStyle={styles.cardList}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }   
            >
            {characters.length && characters.map(item => (
                <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Character Information', item)}>
                    <Card name={item.name} image={item.image} />
                </TouchableOpacity>
                )
            )}

            </ScrollView>    
        </View>
    )
}

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%'
    },
    text: {
        color: '#97CE4C',
        fontSize: 30,
        textAlign: 'center'
    },
    input: {
        color: '#97CE4C',
        borderWidth: 1,
        borderColor: '#97CE4C'
    },
    cardList: {
        width: width,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 10
    },
})

export default Search
