import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupy all screen
        backgroundColor: '#8257e5',
        justifyContent: 'center', // center contents
        padding: 40, // apply 40 padding all items
    },
    banner: {
        width: '100%', // padding would make it non centered because of the default size, this fixes it
        resizeMode: "contain" //maintain proportion of image when resizing
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },
    titleBold: {
        fontWeight: "bold",
    }
})

export default styles;