import React from "react";
import{ StyleSheet,View,Text} from "react-native";
import BasicButton from './BasicButton'


export default function Landing({navigation}) {
    //function to handle when login btn is clicked on
    function handleLoginBtnClick() {
        console.log("login clicked");
        navigation.navigate('Login');
    }

    //function to handle when signup btn is clicked on
    function handleSignUpBtnClick() {
        console.log("signup clicked");
        navigation.navigate('SignUp');
    }

    //component rendering
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quizmania</Text>
            <View style={styles.divider}></View>
            <BasicButton
                text="Login"
                onPress={handleLoginBtnClick}
            />
            <View style={styles.divider}></View>
            <BasicButton
                text="Sign Up"
                onPress={handleSignUpBtnClick}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 0,
        paddingHorizontal: 30,
        justifyContent: "center",
    },
    title: {
        fontWeight: '500',
        fontSize: 30,
        letterSpacing: 0.1,
        textAlign: "center",
    },
    divider: {
        paddingVertical: 8,
    },
});
