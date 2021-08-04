import React, { useState, createContext } from 'react'
import firebase, { db } from '../database/firebase'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')

    const register = async (username, email, password) => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
            await db.collection('users').add({
                username: username,
                email: email,
                password: password
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
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                register,
                logIn,
                logOut
            }}
        >

        { children }
        </AuthContext.Provider>
    )
}