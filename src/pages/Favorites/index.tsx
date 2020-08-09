import React, { useState } from 'react'
import { View } from 'react-native'
import styles from './styles'
import PageHeader from '../../component/PageHeader';
import TeacherItem, { Teacher } from '../../component/TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';


function Favorites()
{
    const [ favorites, setFavorites ] = useState<Teacher[]>([])

    useFocusEffect(() =>
    {
        AsyncStorage.getItem('favorites')
            .then(response => 
            {
                if (response)
                {
                    const favoritesFromStorage = JSON.parse(response as string)
                    console.log("Getting favorites from storage")
                    console.log(favoritesFromStorage)
                    setFavorites(favoritesFromStorage)
                }
            })
    })

    function setTeachers(teacher: Teacher): boolean
    {
        if (favorites)
        {
            const any = favorites.some((t: Teacher) => t.id == teacher.id)
            console.log(favorites)
            console.log(any)
            return any
        }
        return false
    }

    return (
        <View style={styles.container}>
            <PageHeader title={"Seus Proffys Favoritos"} />
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={
                    {
                        paddingHorizontal: 16,
                        paddingBottom: 24,
                    }
                }
            >
                {favorites.map(
                    (teacher: Teacher) =>
                    {
                        return (
                            <TeacherItem
                                key={teacher.id}
                                teacherItem={teacher}
                                favorited={() => setTeachers(teacher)}
                            />)
                    }
                )}
            </ScrollView>
        </View>

    )
}

export default Favorites;