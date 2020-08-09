import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import PageHeader from '../../component/PageHeader';
import TeacherItem from '../../component/TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';


function Favorites()
{
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
            </ScrollView>
        </View>

    )
}

export default Favorites;