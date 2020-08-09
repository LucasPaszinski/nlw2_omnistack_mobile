import React, { useState, useEffect } from 'react'
import { View, Text, Image, Linking } from 'react-native'
import styles from './styles'
import PageHeader from '../../component/PageHeader';
import TeacherItem, { Teacher } from '../../component/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import api from '../../services/api'
import AsyncStorage from "@react-native-community/async-storage";


function TeacherList()
{
    const [ filterVisible, setFilterVisible ] = useState(false)

    const [ subject, setSubject ] = useState('')
    const [ week_day, setWeekDay ] = useState('')
    const [ time, setTime ] = useState('')

    const [ teacherItems, setTeacherItems ] = useState<Teacher[]>([])
    const [ favorites, setFavorites ] = useState<Teacher[]>([])

    useEffect(() =>
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
                    setTeacherItems(favoritesFromStorage)
                }
            })
    }, [])

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

    async function SearchTeachers()
    {
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })
        console.log(response.data)
        setTeacherItems(response.data)
        setFilterVisible(false)
    }

    return (
        <View style={styles.container}>
            <PageHeader title={"Proffys disponíveis"} headerRight={
                <BorderlessButton
                    onPress={() => setFilterVisible(!filterVisible)}
                >
                    <Feather
                        name="filter"
                        size={20}
                        color={"#FFF"}
                    />
                </BorderlessButton>
            }>
                {filterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>
                            Matérial
                        </Text>
                        <TextInput
                            placeholderTextColor={'#c1bccc'}
                            style={styles.input}
                            placeholder={'Qual a matéria ?'}
                            value={subject}
                            onChangeText={setSubject}
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>
                                    Dia da Semana
                                </Text>
                                <TextInput
                                    placeholderTextColor={'#c1bccc'}
                                    style={styles.input}
                                    placeholder={'Qual o dia ?'}
                                    value={week_day}
                                    onChangeText={setWeekDay}
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>
                                    Matérial
                                </Text>
                                <TextInput
                                    placeholderTextColor={'#c1bccc'}
                                    style={styles.input}
                                    placeholder={'Qual Horário ?'}
                                    value={time}
                                    onChangeText={setTime}
                                />
                            </View>
                        </View>

                        <RectButton
                            style={styles.searchButton}
                            onPress={SearchTeachers}
                        >
                            <Feather
                                name="search"
                                size={20}
                                color={'#FFF'}
                            />
                            <Text style={styles.searchText}>
                                Buscar
                            </Text>
                        </RectButton>
                    </View>
                )
                }
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={
                    {
                        paddingHorizontal: 16,
                        paddingBottom: 24,
                    }
                }
            >
                {teacherItems.map(
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
        </View >

    )
}

export default TeacherList;