import { View, Text } from 'react-native';
import styles from '../../styles';

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.gameNumberContainer}>
            <Text style={styles.gameNumberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer