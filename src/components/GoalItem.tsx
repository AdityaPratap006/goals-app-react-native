import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface GoalItemProps {
    value: string;
};

const GoalItem = ({ value }: GoalItemProps) => {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalTitle}>{value}</Text>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        padding: 10,
        backgroundColor: '#2198f3',
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
    },
});
