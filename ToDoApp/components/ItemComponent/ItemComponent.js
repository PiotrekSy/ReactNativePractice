import { View, Text, Pressable, } from 'react-native';
import { styles } from '../../styles';

export const ItemComponent = (props) => {

    return (
        <Pressable
            onPress={props.onDeleteItem.bind(this, props.id)}
            // android_ripple={{ color: "#0d292d" }}
            style={({ pressed }) => pressed && styles.listElementPressed}
        >
            <View style={styles.listElement}>
                <Text style={styles.listElementText}>{props.text}</Text>
            </View>
        </Pressable>
    )
}