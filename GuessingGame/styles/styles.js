import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    //WHOLE APP AND BACKGROUND:

    rootScreen: {
        flex: 1,
    },
    startGameScreen: {
        flex: 1,
        padding: 16,
    },
    backgroundImage: {
        opacity: 0.15
    },

    //LANDING SCREEN:

    startGameScreenItemsWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%',
        backgroundColor: '#35061e',
        borderRadius: 20,

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
    buttonsWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 10,
    },
    buttonContainer: {
        flex: 1
    },
    buttonPrimaryOuter: {
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 7 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        borderRadius: 26,
        // width: '35%',
        marginVertical: 8,
        overflow: 'hidden',
        marginHorizontal: 12

    },
    buttonPrimaryInner: {
        height: 45,
        backgroundColor: '#4e0329',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 26,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonPrimaryText: {
        fontWeight: 'bold',
        color: 'white'
    },
    pressed: {
        opacity: 0.75
    }
})
