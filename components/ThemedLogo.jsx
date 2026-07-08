import { useColorScheme, Image } from 'react-native'
import React from 'react'

import DarkLogo from '../assets/favicon.png'
import LightLogo from '../assets/favicon.png'

const ThemedLogo = ({ ...props }) => {

    const colourScheme = useColorScheme()
    const logo = colourScheme === 'dark' ? DarkLogo : LightLogo

    return (
        <Image source={logo} {...props}/>
    )
}

export default ThemedLogo