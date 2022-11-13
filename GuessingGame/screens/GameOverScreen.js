import React, { useState } from 'react';
import { View, TextInput, Text, Alert } from 'react-native'
import styles from '../styles'
import PrimaryButton from '../components/ui/PrimaryButton'

const GameOverScreen = () => {
    return (
        <View style={styles.startGameScreen}>
            <View style={styles.buttonsWrapper}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>EXIT</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton >PLY AGAIN</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default GameOverScreen;