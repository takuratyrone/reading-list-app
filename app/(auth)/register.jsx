import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { Colours } from '../../constants/Colours'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
import ThemedTextInput from '../../components/ThemedTextInput'

const register = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = useState(null)

    const { register } = useUser()

    const handleSubmit = async () => {
        setError(null)

        try {
            await register(email, password)
        } catch (error) {
            setError(error.message)
        }
    } 

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss }>
            <ThemedView style={styles.container}>
            <Spacer/>
            <ThemedText style={styles.title} title={true}>
                Register for an Account
            </ThemedText>

            <ThemedTextInput
                    style={{ width: '80%', marginBottom: 20 }}
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    value={email}
                />

            

                <ThemedTextInput
                    style={{ width: '80%', marginBottom: 20 }}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                />

            <ThemedButton onPress={handleSubmit}>
                <Text style={{ color: '#f2f2f2'}}>Register</Text>
            </ThemedButton>

            <Spacer />

            {error && <Text style={styles.error}>{error}</Text>}

            <Spacer height={100}/>
            <Link href="/login">
                <ThemedText style={{ textAlign: 'center' }}>
                    Already have an account? Login
                </ThemedText>
            </Link>
            </ThemedView>
        </TouchableWithoutFeedback>
    )
}

export default register

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

    error: {
        color: Colours.warning,
        padding: 10, 
        backgroundColor: '#f5c1c8',
        borderColor: Colours.warning,
        borderWidth: 1,
        borderRadius: 6, 
        marginHorizontal: 10,
    },
})