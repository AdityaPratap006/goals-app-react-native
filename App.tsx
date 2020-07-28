import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface Goal {
  id: string;
  value: string;
};

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState<string>('');
  const [goals, setGoals] = useState<Goal[]>([]);

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setGoals(prevGoals => [...prevGoals, {
      id: Date.now().toString(),
      value: enteredGoal,
    }]);
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
      <FlatList
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={goals}
        renderItem={(itemData) => {
          return (
            <View style={styles.goalItem}>
              <Text style={styles.goalTitle}>{itemData.item.value}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 50,
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
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
  listContainer: {
    width: '100%',
    margin: 0,
  },
  goalItem: {
    padding: 10,
    backgroundColor: '#2196f3',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 10,
    marginVertical: 20,
    marginHorizontal: 20,
    height: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goalTitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  }
});
