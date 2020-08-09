import React, { useState } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'

import { RectButton } from 'react-native-gesture-handler'

import giveClassesBackgroundImage from '../../assets/images/give-classes-background.png'

import { useNavigation } from '@react-navigation/native'

function GiveClass()
{
    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={giveClassesBackgroundImage}
                style={styles.content}
                resizeMode='contain'
            >
                <Text style={styles.title}>
                    Quer ser um proffy?
                </Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor em nossa plataforma web.
                </Text>
            </ImageBackground>
            <RectButton
                style={styles.button}
                onPress={() => navigate('Landing')}
            >
                <Text style={styles.buttonText}>
                    Tudo Bem
                </Text>
            </RectButton>
        </View>

    )
}

export default GiveClass;