import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from '../../styles'
import Colors from '../../constants/colors'

const PrimaryButton = ({ children, onPress }) => {

    return (
        <View style={styles.buttonPrimaryOuter}>
            <Pressable onPress={onPress}
                style={({ pressed }) => pressed ?
                    [styles.pressed, styles.buttonPrimaryInner] : styles.buttonPrimaryInner}
                android_ripple={{ color: Colors.primary600 }}
            >
                <Text style={styles.buttonPrimaryText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton