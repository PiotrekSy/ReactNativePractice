import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#230827',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        margin: 70
    },
    inputStyle: {
        backgroundColor: '#503055',
        width: '90%',
        borderStyle: 'solid',
        borderRadius: 40,
        textAlign: 'center',
        padding: 16
    },
    inputContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#230827',
    },
    inputButtonContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    inputButtons: {
        marginHorizontal: 0,
        width: '30%'
    },
    listContainer: {
        flex: 3,
        width: '90%',
        display: 'flex'
    },

    listElement: {
        width: '100%',
        marginTop: 10,
        borderRadius: 40,
        backgroundColor: '#b66b08',
        fontWeight: 'bold',

    },
    listElementText: {
        borderRadius: 40,
        paddingVertical: 15,
        paddingHorizontal: 20,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    listElementPressed: {
        opacity: 0.5
    },
    modalImage: {
        height: 180,
        width: 180,
        margin: 40
    },
    modalTextArea: {
        margin: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalText: {
        color: '#ffffff'
    }


});
