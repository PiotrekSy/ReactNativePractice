import React from 'react';
import { View, TextInput, Text } from 'react-native'
import styles from '../styles'
import PrimaryButton from '../components/PrimaryButton'

const StartGameScreen = () => {
    return (
        <View style={styles.startGameScreen}>
            <View style={styles.startGameScreenItemsWrapper}>
                <TextInput
                    style={styles.startGameScreenInput}
                    maxLength={2}
                    keyboardType='number-pad'
                />
                <View style={styles.buttonWrapper}>
                    <PrimaryButton style={styles.buttonPrimary}>RESET</PrimaryButton>
                    <PrimaryButton style={styles.buttonPrimary}>CONFIRM</PrimaryButton>
                </View>
            </View>
        </View>

    )
}

export default StartGameScreen;