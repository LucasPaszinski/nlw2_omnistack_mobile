import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import { useNavigation } from '@react-navigation/native'

import { RectButton } from 'react-native-gesture-handler'
import api from '../../services/api'

function Landing()
{
    const [ totalConnections, setTotalConnection ] = useState(0);

    useEffect(() =>
    {
        const response = api.get('connections')
            .then((response) =>
            {  
                setTotalConnection(response.data.total)
            })
    }, [])

    const { navigate } = useNavigation();

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
            <View style={styles.buttonsContainer}>

                <RectButton
                    style={[ styles.button, styles.studyButton ]}
                    onPress={() => navigate('Study')}
                >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>
                        Estudar
                    </Text>
                </RectButton>

                <RectButton
                    style={[ styles.button, styles.giveClassesButton ]}
                    onPress={() => navigate('GiveClasses')}
                >
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>
                        Dar Aulas
                    </Text>
                </RectButton>

            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões feitas {'\t'}
                <Image source={heartIcon} />
            </Text>
        </View>

    )
}

export default Landing;