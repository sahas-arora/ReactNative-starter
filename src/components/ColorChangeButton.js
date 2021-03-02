import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const ColorChangeButton = ({color, onIncrease, onDecrease }) => {
    return(
        <View>
            <Text>{color}</Text>
            <Button
                title={`Increase ${color}`}
                onPress={() => {
                    onIncrease();
                }}
            />
            <Button
                title={`Decrease ${color}`}
                onPress={() => {
                    onDecrease();
                }}
            />
        </View>
    );
}

export default ColorChangeButton;