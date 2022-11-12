import React from 'react';
import { Text } from 'react-native';
import styles from '../../styles'


const Title = ({ children }) => {
    return (
        <Text style={styles.gameScreenTitle}>{children}</Text>
    )
}

export default Title;