import { StyleSheet } from 'react-native';
import Colors from '../constants/colors'

export const styles = StyleSheet.create({
    //WHOLE APP AND BACKGROUND:

    rootScreen: {
        flex: 1,
    },
    startGameScreen: {
        padding: 16,
        marginTop: 100,
        alignItems: 'center'

    },

    backgroundImage: {
        opacity: 0.15
    },

    //START SCREEN:

    startGameScreenItemsWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        backgroundColor: Colors.primary600,
        borderRadius: 20,
    },
    instructionText: {
        fontSize: 20,
        color: Colors.primary100,
        padding: 16
    },
    startGameScreenInput: {
        borderBottomWidth: 2,
        borderTop: "none",
        height: 50,
        width: 50,
        fontSize: 32,
        fontWeight: 'bold',
        borderBottomColor: Colors.primary100,
        textAlign: 'center',
        marginVertical: 8,
        color: Colors.primary100,
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
        width: '40%',
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
        backgroundColor: Colors.primary600,
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
    },

    //GAME SCREEN

    gameScreen: {
        marginTop: '20%',
        padding: 20,
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    },
    gameQuestion: {
        paddingTop: 20,

    },
    gameQuestionText: {
        color: Colors.primary600,
        fontWeight: 'bold',
        fontSize: 24
    },
    gameScreenTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: Colors.primary100,
        borderWidth: 2,
        borderColor: Colors.primary100,
        padding: 12
    },
    gameNumberContainer: {
        borderWidth: 4,
        paddingHorizontal: 96,
        paddingVertical: 30,
        marginTop: '5%',
        borderColor: 'white',
    },
    gameNumberText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: Colors.primary100,
    },

    gameButtonsContainer: {

    }


})
