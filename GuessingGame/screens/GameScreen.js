import React, { useState } from 'react'
import { View, Text } from 'react-native';
import styles from '../styles';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';


const generateRandomBetween = (min, max, exclude) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber
    }
}

// generateRandomBetween(min, max, exclude)


const GameScreen = ({ userNumber }) => {

    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)


    return (
        <View style={styles.gameScreen}>

            <Title>Opponent's Guess</Title>
            <NumberContainer />
            <View style={styles.buttonsWrapper}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                    // onPress={}
                    >-</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                    // onPress={}
                    >+</PrimaryButton>
                </View>
            </View>

            <View>
                <Text>
                    LOGS
                </Text>
            </View>
        </View>
    )
}


export default GameScreen;