import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const NameDisplayingScreen = () => {
    const [password, setPassword] = useState('');

    
    return(
        <View>
            <Text>Enter password</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputBar}
                value={password}
                onChangeText={newValue => setPassword(newValue)}
            />
           {password.length < 4 ? <Text style={{color: 'red'}}>Password must be greater than 5 characters</Text> : null}
        </View>
    )

}

const styles = StyleSheet.create({
    inputBar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
});

export default NameDisplayingScreen;