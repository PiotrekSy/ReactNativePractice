import React, { useState } from 'react';
import { View, TextInput, Button, Modal, Image, Text } from 'react-native';
import { styles } from '../../styles';

export const InputComponent = (props) => {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    const goalHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    const submitHandle = () => {
        if (enteredGoalText !== '' && enteredGoalText !== 'Write Your Next Task above') {
            props.onAddGoal(enteredGoalText);
            setEnteredGoalText('');
        }
    }

    const closeModal = () => props.onClose()

    return (
        <Modal
            visible={props.isVisible}
            animationType={'slide'}

        >
            <View style={styles.inputContainer}>
                <Image
                    style={styles.modalImage}
                    source={require('../../assets/images/pngwing.com.png')} />
                <TextInput
                    style={styles.inputStyle}
                    placeholder='My course target'
                    onChangeText={goalHandler}
                    value={enteredGoalText}
                />
                <View style={styles.modalTextArea}>
                    <Text style={styles.modalText}>{enteredGoalText.length > 0 ?
                        'You are about to add element: ' + enteredGoalText : ''}</Text>
                </View>
                <View style={styles.inputButtonContainer}>
                    <View style={styles.inputButtons}>
                        <Button
                            title='Back'
                            onPress={closeModal}
                            color={'#900707'}
                        >
                        </Button>
                    </View>
                    <View style={styles.inputButtons}>
                        <Button
                            title='Add goal'
                            onPress={submitHandle}
                            color={'#b66b08'}
                        >
                        </Button>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
