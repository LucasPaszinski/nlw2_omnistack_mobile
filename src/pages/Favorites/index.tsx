import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import PageHeader from '../../component/PageHeader';


function Favorites()
{
    return (
        <View style={styles.container}>
            <PageHeader title={"Meus Proffys favoritos"} />
            <Text>
                Favorites
            </Text>
        </View>

    )
}

export default Favorites;