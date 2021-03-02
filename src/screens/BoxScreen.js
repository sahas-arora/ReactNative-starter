import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle1}>
                Box 1
            </Text>
            <Text style={styles.textStyle2}>
                Box 2
            </Text>
            <Text style={styles.textStyle3}>
                Box 3
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
       borderWidth: 3,
       height: 200,
       borderColor: 'black',
       flexDirection: "row",
       justifyContent: "space-between"
    },
    textStyle1: {
        borderWidth: 1,
        borderColor: 'red',
        height: 100,
        width: 100, 
        backgroundColor: 'red'
    },
    textStyle2: {
        borderWidth: 1,
        borderColor: 'red',
        height: 100,
        width: 100, 
        alignSelf: "center",
        top: 50,
        backgroundColor: 'green'
    },
    textStyle3: {
        borderWidth: 1,
        borderColor: 'red',
        height: 100,
        width: 100, 
        backgroundColor: 'blue'
    }
});

export default BoxScreen;