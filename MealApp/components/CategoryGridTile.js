import {
    Pressable,
    View, Text, StyleSheet, Platform
} from 'react-native';

const CategoryGridTile = ({ title, color }) => {

    return (
        <View style={styles.gridItem}>
            <Pressable
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                android_ripple={{ color: '#0e6016' }}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        backgroundColor: 'white',
        overflow: Platform.select({ android: 'hidden', ios: 'visible' })
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.75
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16

    }

});