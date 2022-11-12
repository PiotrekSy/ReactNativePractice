import React, { useState } from 'react';
import { View, TextInput, Text, Alert } from 'react-native'
import styles from '../styles'
import PrimaryButton from '../components/ui/PrimaryButton'

const StartGameScreen = ({ onPickNumber }) => {

    const [enteredNumber, setEnteredNumber] = useState('')

    const numberInputHandler = (inputValue) => {
        setEnteredNumber(inputValue);
    }

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    const confirmInputHandler = () => {

        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Number has to be number between 1 and 99.',
                [{ text: 'OK', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        onPickNumber(chosenNumber);
    }


    return (
        <View style={styles.startGameScreen}>
            <View style={styles.startGameScreenItemsWrapper}>
                <TextInput
                    style={styles.startGameScreenInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsWrapper}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>RESET</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>CONFIRM</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;