import { useScrollToTop } from '@react-navigation/native'
import React, { useState, useRef } from 'react'
import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native'
import Navbar from '../navbar/Navbar'

const Search = () => {
    const [input, setInput] = useState('')
    const ref = useRef(null)




    useScrollToTop(ref)
    return (
        <View style={styles.container}>
            <Navbar />
            <Text style={styles.text}>Search for a character: </Text>
            <TextInput style={styles.input} onChangeText={setInput} value={input} placeholder='Search...'/>
            <ScrollView ref={ref}></ScrollView>    
        </View>
    )
}

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
    }
})

export default Search
