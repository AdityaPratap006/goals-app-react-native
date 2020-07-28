import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState<string>('');
  const [goals, setGoals] = useState<string[]>([]);

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setGoals(prevGoals => [...prevGoals, enteredGoal]);
    setEnteredGoal('');
  }

  useEffect(function whenGoalsListChanges() {
    console.log({ goals });
  }, [goals]);

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={enteredGoal}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
        />
        <Button
          title="ADD"
          onPress={addGoalHandler}
        />
      </View>
      <View>
        {
          goals.map(goal => {
            return (
              <Text key={goal}>{goal}</Text>
            );
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
