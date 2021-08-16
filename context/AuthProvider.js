import React, { useState, createContext } from 'react'
import firebase, { db } from '../database/firebase'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [favorites, setFavorites] = useState([])
    const [dark, setDark] = useState(false)
    const [loaded, setLoaded] = useState(false)

    const toggle = () => {
        setDark(prev => !prev)
    }

    const register = async (username, email, password) => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
            const {uid} = firebase.auth().currentUser
            await db.doc(`users/${uid}`).set({
                username,
                email,
                password,
                favorites: []
            })
        } catch (error) {
            console.log(error)
        }
    }

    const logIn = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            console.log(error)
        }
    }

    const logOut = async () => {
       await firebase.auth().signOut()
       await setLoaded(false)
       await setUser(null)
    }

    const addFavorite = async (uid, id, name, species, gender, status, origin, image) => {
        try {
            return await db.doc(`users/${uid}`).update({
                favorites: firebase.firestore.FieldValue.arrayUnion({
                        id,
                        name,
                        species,
                        gender,
                        status,
                        origin,
                        image
                    })
                })
            } catch (error) {
            console.log(error)
        }
    }

    const removeFavorite = async (uid, id, name, species, gender, status, origin, image) => {
        try {
            return await db.doc(`users/${uid}`).update({
                favorites: firebase.firestore.FieldValue.arrayRemove({
                    id,
                    name,
                    species,
                    gender,
                    status,
                    origin,
                    image
                })
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                favorites,
                setFavorites,
                register,
                logIn,
                logOut,
                addFavorite,
                removeFavorite,
                dark,
                setDark,
                toggle,
                loaded,
                setLoaded
            }}
        >

        { children }
        </AuthContext.Provider>
    )
}