import React, { useState } from 'react'
import { View, Text } from 'react-native';
import styles from '../styles';
import PrimaryButton from '../components/ui/PrimaryButton';
import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';


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

    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    let minBoundary = 1;
    let maxBoundary = 100;

    const nextGuessHandler = () => {
        if (direction === 'lower') {
            maxBoundary = currentGuess;
            generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        }
        else { }
    }

    return (
        <View style={styles.gameScreen}>

            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.buttonQuestion}>
                <Text>Higher or lower?</Text>
            </View>
            <View style={styles.buttonsWrapper}>
                <View style={styles.buttonsWrapper}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler}>-</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler}>+</PrimaryButton>
                    </View>
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