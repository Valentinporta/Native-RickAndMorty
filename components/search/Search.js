import { useScrollToTop } from '@react-navigation/native'
import React, { useState, useRef, useCallback, useContext } from 'react'
import { View, TextInput, Text, StyleSheet, Dimensions, RefreshControl, FlatList } from 'react-native'
import Card from '../card/Card'
import Navbar from '../navbar/Navbar'
import axios from 'axios'
import ErrorMsg from '../errorMsg/ErrorMsg'
import { AuthContext } from '../../context/AuthProvider'

const Search = ({ navigation }) => {
    const [input, setInput] = useState('')
    const [page, setPage] = useState(1)
    const [errorMsg, setErrorMsg] = useState('')
    const [nextPage, setNextPage] = useState(false)
    const [characters, setCharacters] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const ref = useRef(null)
    const { dark } = useContext(AuthContext)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 1500)
    })

    const findCharacter = async () => {
        if (input) {
            try {
                await axios.get(`https://rickandmortyapi.com/api/character/?page=${1}&name=${input}`)
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
                    const next = res.data.info.next
                    if (!next) {
                        setNextPage(false)
                        setPage(1)
                    } else {
                        setNextPage(true)
                        setPage(prev => prev + 1)
                    }
                    setErrorMsg('')
                    setCharacters(response)
                })
            } catch (err) {
                setErrorMsg('Sorry! No characters found!')
                setCharacters([])
                setPage(1)
                setNextPage(false)
            }
        } else {
            setCharacters([])
            setPage(1)
            setNextPage(false)
        }
    }

    const getNextPage = async () => {
        try {
            await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${input}`)
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
                        const next = res.data.info.next
                        if (!next) {
                            setNextPage(false)
                            setPage(1)
                        } else {
                            setNextPage(true)
                            setPage(prev => prev + 1)
                        }
                        setErrorMsg('')
                        setCharacters([...characters].concat(response))
                    })
        } catch (err) {
            setErrorMsg('Sorry! No characters found!')
            setCharacters([])
            setPage(1)
            setNextPage(false)
        }
    }

    useScrollToTop(ref)
    return (
        <View style={[styles.container, dark ? {backgroundColor: 'black'} : {backgroundColor: 'white'}]}>
            <Navbar />
            <Text style={[styles.text, dark ? {color: '#97CE4C'} : {color: '#B7E4F9FF'}]}>Search for a character:</Text>
            <TextInput
                style={[styles.input, dark ? {color: '#97CE4C', borderColor: '#97CE4C'} : {color: '#B7E4F9FF', borderColor: '#B7E4F9FF'}]}
                autoCapitalize= 'words'
                onChangeText={input => setInput(input)}
                value={input}
                placeholder='Search...'
                onSubmitEditing={findCharacter}
            />
            {!errorMsg ? <FlatList
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
                    onEndReached={nextPage ? () => getNextPage() : null}
                    onEndReachedThreshold={0.1}
                    contentContainerStyle={styles.cardList}
                    numColumns={2}
            /> : <ErrorMsg />}
        </View>
    )
}

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        // backgroundColor: bgColor,
        height: '100%'
    },
    text: {
        // color: darkGreenLightBlue,
        fontSize: 30,
        textAlign: 'center'
    },
    input: {
        // color: darkGreenLightBlue,
        borderWidth: 1,
        // borderColor: darkGreenLightBlue
    },
    cardList: {
        width: width,
        paddingTop: 10
    },
})

export default Search
