import React, { useState } from 'react'
import { View, Text, Image, Linking } from 'react-native'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

import hearthOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import AsyncStorage from '@react-native-community/async-storage'


export interface Teacher
{
    id: number,
    subject: string,
    cost: number,
    user_id: number,
    name: string,
    avatar: string,
    whatsapp: number,
    bio: string,
}

interface TeacherItemProps
{
    teacherItem: Teacher,
    favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacherItem, favorited }) =>
{
    const [ favorite, setFavorite ] = useState(favorited);

    async function ToggleFavorite()
    {
        const favorites = await AsyncStorage.getItem('favorites')
        const favoritesArray = (favorites)
            ? JSON.parse(favorites) as Teacher[]
            : []

        if (favorite)
        {
            const filteredArray = favoritesArray.filter((t: Teacher) => teacherItem.id !== t.id)
            console.log('Removing from favorites')
            console.log(filteredArray)
            await AsyncStorage.setItem('favorites', JSON.stringify(filteredArray))
            setFavorite(false)
        }
        else
        {
            favoritesArray.push(teacherItem)
            console.log('Adding to favorites')
            console.log(favoritesArray)
            await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
            setFavorite(true)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    source={{ uri: teacherItem.avatar }}
                    style={styles.avatar}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name} >
                        {teacherItem.name}
                    </Text>
                    <Text style={styles.subject}>
                        {teacherItem.subject}
                    </Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {teacherItem.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}> R$ {teacherItem.cost}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton
                        style={
                            [ styles.buttonFavorite,
                            (favorite)
                                ? styles.buttonUnfavorite
                                : null ]
                        }
                        onPress={ToggleFavorite}
                    >
                        {favorite
                            ? <Image source={unfavoriteIcon} />

                            : <Image source={hearthOutlineIcon} />
                        }
                    </RectButton>

                    < RectButton
                        style={styles.buttonContact}
                        onPress={() => Linking.openURL(`whatsapp://send?phone=${teacherItem.whatsapp}`)}
                    >
                        <Image source={whatsappIcon} />
                        <Text style={styles.buttonContactText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View >

    )
}

export default TeacherItem;