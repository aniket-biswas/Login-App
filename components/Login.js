import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';
import ORDivider from './ORDivider';
import BasicButton from "./BasicButton";
import LoginSignupBtn from "./LoginSignupBtn";
import Signup from "./Signup";

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Function singup button handling
    function handleSignUpBtnClick() {
        navigation.navigate("SignUp")
        console.log("SignUp Clicked")
    }
    // Function onClick
    function handleLoginonClick() {
        console.log("SignUp Clicked")
    }



    //component rendering
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={styles.inputField}
                    keyboardType="email-address"
                    placeholder="Enter your registered email"
                    value={email}
                    onChangeText={(val) => setEmail(val)}
                />
                <View style={styles.divider}></View>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.inputField}
                    secureTextEntry
                    placeholder="Enter password"
                    value={password}
                    onChangeText={(val) => setPassword(val)}
                />

                <ORDivider/>

                <BasicButton text="Login" onPress={handleLoginonClick} />
                <View style={styles.divider}></View>
                <LoginSignupBtn
                    text="Dont Have an Account?"
                    btnText="Sign Up"
                    onPress={handleSignUpBtnClick} />
            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B8DFD8',

        paddingHorizontal: 30,

    },
    title: {
        fontWeight: '500',
        fontSize: 30,
        letterSpacing: 0.1,
        color: '#2E2E2E',
        fontFamily: "Times New Roman",
    },
    form: {
        marginVertical: 35,
    },
    label: {
        fontSize: 16,
        lineHeight: 18,
        color: '#666666',
        marginBottom: 3,
        color: "#47597E",
        fontFamily: "Helvatica",
        fontWeight: "bold"
    },

    inputField: {
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#BFBFBF',
        paddingVertical: 6,

    },

    divider: {
        paddingVertical: 12,
    },

    log: {
        textAlign: "center",
        marginVertical: 2,
    },

    signup: {
        marginTop: 40,
    }
    ,
    buttoncontainer: {
        backgroundColor: '#2B35E0',
        borderRadius: 8,
        padding: 10,
    },

    Button: {
        paddingVertical: 20,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: "center",
    },
});