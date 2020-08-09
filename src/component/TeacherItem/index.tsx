import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

import hearthOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'


function TeacherItem()
{
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    source={{ uri: 'https://github.com/LucasPaszinski.png' }}
                    style={styles.avatar}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name} >
                        Lucas Lopes Paszinski
                    </Text>
                    <Text style={styles.subject}>
                        Matemática
                    </Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, {'\n'}
                {/* sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. {'\n'}
                    Tempus imperdiet nulla malesuada pellentesque elit eget gravida. {'\n'}
                    Leo in vitae turpis massa sed elementum tempus egestas sed. Vulputate ut pharetra sit amet aliquam id. {'\n'} */}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}> R$ 180,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[ styles.buttonFavorite, styles.buttonUnfavorite ]}>
                        {/* <Image source={hearthOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>
                    <RectButton style={styles.buttonContact}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.buttonContactText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>

    )
}

export default TeacherItem;