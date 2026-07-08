import { Pressable, StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import { Colours } from '../../constants/Colours'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'


const login = () => {

    const handleSubmit = () => {
        console.log('Login button pressed')
    } 

    return (
        <ThemedView style={styles.container}>
            <Spacer/>
            <ThemedText style={styles.title} title={true}>
                Login to Your Account
            </ThemedText>

            <ThemedButton onPress={handleSubmit}>
                <Text style={{ color: '#f2f2f2'}}>Login</Text>
            </ThemedButton>
 

            <Spacer height={100}/>
            <Link href="/register">
                <ThemedText style={{ textAlign: 'center' }}>
                    Don't have an account? Register
                </ThemedText>
            </Link>
        </ThemedView>
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30,
        fontWeight: 'bold',
    },

    btn: {
        backgroundColor: Colours.primary,
        padding: 15,
        borderRadius: 5,
    },

    pressed: {
        opacity: 0.8,
    },
})