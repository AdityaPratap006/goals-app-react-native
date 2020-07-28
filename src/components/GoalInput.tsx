import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

interface GoalInputProps {
    modalOpen: boolean;
    addGoalHandler: (goal: string) => void;
    onCancel: () => void;
};

const GoalInput = ({ modalOpen, addGoalHandler, onCancel }: GoalInputProps) => {
    const [enteredGoal, setEnteredGoal] = useState<string>('');

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoal(enteredText);
    }

    const onGoalSubmit = () => {
        addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal
            visible={modalOpen}
            animationType="slide"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    value={enteredGoal}
                    placeholder="Course Goal"
                    onChangeText={goalInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="ADD"
                        onPress={onGoalSubmit}
                    />
                    <Button
                        color='#e91e63'
                        title="CANCEL"
                        onPress={onCancel}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginVertical: 20,
    },
    buttonContainer: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
