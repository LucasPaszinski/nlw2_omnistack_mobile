import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

import landingImg from '../../assets/images/landing.png'

function Landing()
{
    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title}>
                Seja bem vindo, {'\n'}
                {/* Styles inheritance does not happen in ReactNative,
                    The Text element is an exception to this rule, 
                    A text tag inside a text, does have inheritance */}
                <Text style={styles.titleBold}>
                    O Que deseja fazer ?
                </Text>
            </Text>
        </View>
    )
}

export default Landing;