import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    console.log({enteredGoal});
  }

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
        />
        <Button
          title="ADD"
          onPress={addGoalHandler}
        />
      </View>
      <View>

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
