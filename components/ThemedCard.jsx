import { StyleSheet, useColorScheme, View } from 'react-native'
import React from 'react'

const ThemedCard = ({ style, ...props }) => {
    const colourScheme = useColorScheme()
    const theme = Colours[colourScheme] ?? Colours.light

    return (
        <View style={[{backgroundColor: theme.uiBackground}, styles.card,
            style]} 
            {...props}
        />
    )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20,
    }
})