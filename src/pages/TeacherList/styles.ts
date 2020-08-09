import { StyleSheet } from 'react-native'

// Archivo_400Regular,
// Archivo_700Bold,
// Poppins_400Regular,
// Poppins_600SemiBold

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },
    teacherList: {
        marginTop: -40,
    },
    searchForm: {
        marginBottom: 8,
    },
    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
        width: "100%"
    },
    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputBlock: {
        width: '48%',
    },
    searchButton: {
        flexDirection: "row",
        backgroundColor: '#04d361',
        borderRadius: 8,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 56,
        paddingHorizontal: 70,
    },
    searchText: {
        color: "#FFF",
        fontFamily: "Archivo_700Bold",
        fontSize: 16,
    }
})

export default styles;