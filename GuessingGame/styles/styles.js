import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    startGameScreen: {
        flex: 1,
        padding: 16,
        backgroundColor: '#223c42',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    startGameScreenItemsWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    startGameScreenInput: {
        borderBottomWidth: 2,
        borderTop: "none",
        height: 50,
        width: 50,
        fontSize: 32,
        fontWeight: 'bold',
        borderBottomColor: '#ddb52f',
        textAlign: 'center',
        marginVertical: 8,
        color: '#ddb52f'
    },
    buttonWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    buttonPrimary: {
        height: 40,
        backgroundColor: '#c91d1d',
        elevation: 8,
        width: '40%',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 7 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonPrimaryText: {
        fontWeight: 'bold',

    },
})
