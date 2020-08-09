import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import PageHeader from '../../component/PageHeader';


function TeacherList()
{
    return (
        <View style={styles.container}>
            <PageHeader title={"Proffys disponíveis"} />
            <Text>
                TeacherList
            </Text>
        </View>

    )
}

export default TeacherList;