import React from 'react';
import { View, TextInput, Text } from 'react-native'
import styles from '../styles'
import PrimaryButton from '../components/PrimaryButton'

const StartGameScreen = () => {
    return (
        <View style={styles.startGameScreen}>
            <View style={startGameScreenItemsWrapper}>
                <TextInput placeholder='' style={styles.startGameScreenInput} />
                <View style={styles.buttonWraper}>
                    <PrimaryButton style={styles.buttonPrimary}>RESET</PrimaryButton>
                    <PrimaryButton style={styles.buttonPrimary}>CONFIRM</PrimaryButton>
                </View>
            </View>
        </View>

    )
}

export default StartGameScreen;