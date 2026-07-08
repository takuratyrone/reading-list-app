import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { Colours } from '../constants/Colours'

const RootLayout = () => {

    const colourScheme = useColorScheme()
    const theme = Colours[colourScheme] ?? Colours.light

    return (
    
        <Stack screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
        }}>
            <Stack.Screen name='(auth)' options={{ headerShown: false }} />
            <Stack.Screen name='(dashboard)' options={{ headerShown: false }} />
            <Stack.Screen name='index' options={{ title: 'Home' }} />            
        </Stack> 
       
    )
}

export default RootLayout

const styles = StyleSheet.create({})