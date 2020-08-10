import React, { useState, useEffect } from 'react'
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native'
import styles from './styles'
import PageHeader from '../../component/PageHeader';
import TeacherItem, { Teacher } from '../../component/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import api from '../../services/api'
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from '@react-navigation/native';


function TeacherList()
{
    const [ filterVisible, setFilterVisible ] = useState(false)

    const [ subject, setSubject ] = useState('')
    const [ week_day, setWeekDay ] = useState('')
    const [ time, setTime ] = useState('')

    const [ teacherItems, setTeacherItems ] = useState<Teacher[]>([])
    const [ favorites, setFavorites ] = useState<Teacher[]>([])

    useFocusEffect(React.useCallback(() =>
    {
        loadFavorites();
    }, []))

    function loadFavorites()
    {
        AsyncStorage.getItem('favorites')
            .then(response => 
            {
                if (response)
                {
                    const favoritesFromStorage = JSON.parse(response as string)
                    setFavorites(favoritesFromStorage)
                    const old = teacherItems
                    setTeacherItems([])
                    setTeacherItems(old)
                }
            })
        // Force a redraw on screen, don't use this if possible
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

                        <KeyboardAvoidingView
                            behavior={Platform.OS == "ios" ? "padding" : "height"}
                            style={styles.avoidView}
                        >
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
                                        Horário
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
                        </KeyboardAvoidingView>

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
                                favorited={((favorites) ? favorites.some((t: Teacher) => t.id == teacher.id) : false)}
                                updateCallbackOnFavoriteChange={loadFavorites}
                            />)
                    }
                )}
            </ScrollView>
        </View >

    )
}

export default TeacherList;