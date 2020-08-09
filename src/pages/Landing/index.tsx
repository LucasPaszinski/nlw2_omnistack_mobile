import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

function Landing()
{
    const [ totalConnections, setTotalConnection ] = useState(200);

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
                <TouchableOpacity style={[ styles.button, styles.studyButton ]}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>
                        Estudar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[ styles.button, styles.giveClassesButton ]}>
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>
                        Dar Aulas
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões feitas {'\t'}
                <Image source={heartIcon} />
            </Text>
        </View>

    )
}

export default Landing;