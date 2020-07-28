import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Components
import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';

interface Goal {
  id: string;
  value: string;
};

export default function App() {

  const [goals, setGoals] = useState<Goal[]>([]);

  const addGoalHandler = (enteredGoal: string) => {
    setGoals(prevGoals => [...prevGoals, {
      id: Date.now().toString(),
      value: enteredGoal,
    }]);
  }

  const deleteGoalHandler = (goalId: string) => {
    const filteredGoals = goals.filter(goal => goal.id !== goalId);
    setGoals(filteredGoals);
  }

  useEffect(function whenGoalsListChanges() {
    console.log({ goals });
  }, [goals]);

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <GoalInput addGoalHandler={addGoalHandler} />
      <FlatList
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            value={itemData.item.value}
            onDelete={deleteGoalHandler}
          />
        )}
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
  listContainer: {
    width: '100%',
    margin: 0,
  },
});
