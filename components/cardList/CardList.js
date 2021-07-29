import React from 'react'
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Card from '../card/Card'

const CardList = ({characters}) => {
    return (
        <View style={styles.container}>
        <ScrollView horizontal={true}>
            {characters.map((char, i) => 
                <TouchableOpacity key={char.results[i].id}>
                    <Card name={char.results[i].name} img={char.results[i].image} />
                </TouchableOpacity>)}
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
})

export default CardList
