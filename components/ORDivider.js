import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ORDivider() {
    return (
        <View style={styles.container}>
            <View style={styles.line}></View>
            <Text style={styles.text}>OR</Text>
            <View style={styles.line}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: "4%",
    },

    line: {
        height: 1,
        width: '45%',
        backgroundColor: "#284E78"
    },

    text: {
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 20,
        color: "#39A2DB"
    },
});
