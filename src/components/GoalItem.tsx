import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface GoalItemProps {
    id: string;
    value: string;
    onDelete: (id: string) => void;
};

const GoalItem = ({ id, value, onDelete }: GoalItemProps) => {
    return (
        <TouchableOpacity
            style={styles.touchable}
            onPress={() => {
                onDelete(id);
            }}
        >
            <View style={styles.goalItem}>
                <Text style={styles.goalTitle}>{value}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    touchable: {
        elevation: 10,
    },
    goalItem: {
        padding: 10,
        backgroundColor: '#2196f3',
        borderRadius: 10,
        overflow: 'hidden',
        // elevation: 10,
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
