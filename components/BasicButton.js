import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BasicButton({
    customStyle,
    text,
    onPress,
}) {
    return (

        <TouchableOpacity style={[styles.container, customStyle]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2B35E0',
        padding: 10,
        width: "11%",
        marginTop: 10,
        shadowColor: '#77ACF1',
        shadowOffset: { height: 8, width: 5 },
        shadowOpacity: 2,
        shadowRadius: 4,
        borderRadius: 10,
    },

    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: "center",
    },

});
