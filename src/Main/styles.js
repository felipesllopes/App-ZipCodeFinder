import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
    },
    tittle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 50,
    },
    caixa: {
        backgroundColor: '#00BCee',
        margin: 30,
        paddingBottom: 30,
        borderRadius: 10,
        borderColor: '#1E90FF',
        borderWidth: 3,
        marginTop: 30,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginVertical: 20,
    },
    textInput: {
        backgroundColor: 'white',
        marginHorizontal: 40,
        borderRadius: 5,
        borderColor: '#BBB',
        borderWidth: 2,
        fontSize: 24,
        color: 'black',
        marginBottom: 14,
        textAlign: 'center'
    },
    areaBtn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    button: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFF',
    },
    textButton: {
        fontSize: 22,
        margin: 3,
        fontWeight: 'bold',
        marginHorizontal: 6,
        color: 'white',
    },
    result: {
        marginTop: 10,
    },
    adress: {
        fontSize: 24,
        color: 'black',
        textAlign: 'center'
    }
})

export default styles;