import { useScrollToTop } from '@react-navigation/native'
import React, { useRef } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Navbar from '../navbar/Navbar'

const Favorites = () => {
    const ref = useRef(null)


    useScrollToTop(ref)
    return (
        <View style={styles.container}>
            <Navbar />
            <Text>Favorites Screen</Text>
            <ScrollView ref={ref}></ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%'
    }
})

export default Favorites
