import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

interface GoalInputProps {
    modalOpen: boolean;
    addGoalHandler: (goal: string) => void;
};

const GoalInput = ({ modalOpen, addGoalHandler }: GoalInputProps) => {
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
                <Button
                    title="ADD"
                    onPress={onGoalSubmit}
                />
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
});
