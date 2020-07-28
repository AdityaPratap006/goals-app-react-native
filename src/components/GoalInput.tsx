import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

interface GoalInputProps {
    addGoalHandler: (goal: string) => void;
};

const GoalInput = ({ addGoalHandler }: GoalInputProps) => {
    const [enteredGoal, setEnteredGoal] = useState<string>('');

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoal(enteredText);
    }

    const onGoalSubmit = () => {
        addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    return (
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
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
    },
    textInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginVertical: 20,
    },
});
