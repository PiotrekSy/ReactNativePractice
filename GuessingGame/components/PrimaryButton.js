import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles'


const PrimaryButton = ({ children }) => {

    return (
        <View style={styles.buttonPrimary}>
            <Text style={styles.buttonPrimaryText}>{children}</Text>
        </View>
    )
}

export default PrimaryButton