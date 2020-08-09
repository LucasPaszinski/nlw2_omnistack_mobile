import { StyleSheet } from 'react-native'

// Archivo_400Regular
// Archivo_700Bold
// Poppins_400Regular
// Poppins_600SemiBold

const styles = StyleSheet.create({
    container: {
        flex: 1, // Occupy all screen
        backgroundColor: '#8257e5',
        justifyContent: 'center', // center contents
        padding: 40, // apply 40 padding all items
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 32,
        color: "#fff",
        lineHeight: 37,
        maxWidth: 180,
    },
    description: {
        marginTop: 24,
        color: "#d4c2ff",
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,
    },
    button: {
        marginVertical:40,
        backgroundColor: '#04d361',
        height: 58,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: "center"
    },
    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 16,
        justifyContent: "center",
    },
})

export default styles;