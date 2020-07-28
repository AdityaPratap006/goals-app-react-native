import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface AddGoalButtonProps {
    onPress: () => void;
};

const AddGoalButton = ({ onPress }: AddGoalButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.touchable}>
            <View style={styles.container}>
                <Text style={styles.text}> + </Text>
            </View>
        </TouchableOpacity>
    );
};

export default AddGoalButton;

const styles = StyleSheet.create({
    touchable: {
        elevation: 10,
    },
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#2196f3',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 0,
    },
    text: {
        padding: 0,
        fontSize: 40,
        fontWeight: "800",
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});
