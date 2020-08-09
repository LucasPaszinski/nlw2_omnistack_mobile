import { StyleSheet } from 'react-native'

// Archivo_400Regular,
// Archivo_700Bold,
// Poppins_400Regular,
// Poppins_600SemiBold

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
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },
    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },
    buttonsContainer: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    button: {
        width: '48%',
        height: 150,
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },
    studyButton: {
        backgroundColor: '#9871f5'

    },
    giveClassesButton: {
        backgroundColor: '#04d361'
    },
    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20,
    },
    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40,
    }
})

export default styles;