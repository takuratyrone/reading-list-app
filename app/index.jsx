import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/favicon.png'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import Spacer from '../components/Spacer'
import ThemedLogo from '../components/ThemedLogo'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>

        <ThemedLogo />
        <Spacer height={20}/>
        <ThemedText style={styles.title} title={true}>
            The Number 1
        </ThemedText>

        <Spacer height={10}/>
        <ThemedText>Reading List App</ThemedText>
        <Spacer/>

        <Link href="/login" style={styles.link}>
            <ThemedText>Login Page</ThemedText>
        </Link>

        <Link href="/register" style={styles.link}>
            <ThemedText>Register Page</ThemedText>
        </Link>

        <Link href="/profile" style={styles.link}>
            <ThemedText>Profile Page</ThemedText>
        </Link>
      
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    }

})