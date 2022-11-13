import React, { useState, useEffect } from 'react'
import { View, Text, Alert } from 'react-native';
import styles from '../styles';
import PrimaryButton from '../components/ui/PrimaryButton';
import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import { Ionicons } from '@expo/vector-icons'

const generateRandomBetween = (min, max, exclude) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {

    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [userNumber, currentGuess, onGameOver])

    const nextGuessHandler = (direction) => {

        if ((direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'higher' && currentGuess > userNumber)) {
            Alert.alert('Don\'t Lie', 'You know that this is WRONG', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        }
        else {
            minBoundary = currentGuess + 1;
        }

        console.log('min:' + minBoundary, 'max:' + maxBoundary, 'current:' + currentGuess)
        const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNumber);
    }

    return (
        <View style={styles.gameScreen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.gameQuestion}>
                <Text style={styles.gameQuestionText}>Higher or lower?</Text>
            </View>
            <View style={styles.buttonsWrapper}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name='md-remove' size={24} /></PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                        <Ionicons name='md-add' size={24} />
                    </PrimaryButton>
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