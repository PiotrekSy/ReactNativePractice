import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from '../styles'


const PrimaryButton = ({ children, onPress }) => {

   

    return (
        <View style={styles.buttonPrimaryOuter}>
            <Pressable onPress={onPress}
                style={({ pressed }) => pressed ?
                    [styles.pressed, styles.buttonPrimaryInner] : styles.buttonPrimaryInner}
                android_ripple={{ color: '#35031c' }}
            >
                <Text style={styles.buttonPrimaryText}>{children}</Text>
            </Pressable>
        </View >
    )
}

export default PrimaryButton