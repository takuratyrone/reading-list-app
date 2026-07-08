import { useColorScheme, Text } from 'react-native'
import React from 'react'
import { Colours } from '../constants/Colours'

const ThemedText = ({ style, title = false, ...props }) => {

    const colourScheme = useColorScheme()
    const theme = Colours[colourScheme] ?? Colours.light
    const textColor = title ? theme.title : theme.text

    return (
        <Text style={[{ color: textColor }, style]} 
            {...props} 
        />
    )
}

export default ThemedText