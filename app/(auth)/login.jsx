import { Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { Colours } from '../../constants/Colours'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'


const login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const { login } = useUser()

    const handleSubmit = async () => {
        setError(null)

        try {
            await login(email, password)
        } catch (error) {
            setError(error.message)
        }
    } 

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss }>
            <ThemedView style={styles.container}>
                <Spacer/>
                <ThemedText style={styles.title} title={true}>
                    Login to Your Account
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
                    <Text style={{ color: '#f2f2f2'}}>Login</Text>
                </ThemedButton>
    
                <Spacer />

                {error && <Text style={styles.error}>{error}</Text>}

                <Spacer height={100}/>
                <Link href="/register">
                    <ThemedText style={{ textAlign: 'center' }}>
                        Don't have an account? Register
                    </ThemedText>
                </Link>
            </ThemedView>
        </TouchableWithoutFeedback>
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