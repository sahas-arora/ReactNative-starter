import React, { useReducer } from "react";
import {Button, FlatList, Text, View } from "react-native";

const reducer = (state, action) => {

    switch(action.type) {
        case 'increase_counter':
            return {...state, counter: state.counter + action.payload};
        case 'decrease_counter':
            return {...state, counter: state.counter - action.payload};
        default:
            return state;
    };
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter : 0 });
    const { counter } = state;
    console.log("state right now -> ", counter);
    // const [counter, setCounter] = useState(0); //This is array destructuring 

    return(
        <View>
            <Button
                title="Increase"
                onPress={() => dispatch({ type: 'increase_counter', payload: 1})}
            />
            <Button
                title="Decrease"
                onPress={() => dispatch({ type: 'decrease_counter', payload: 1})}
            />
            <Text>
                {counter}
            </Text>
        </View>
    )
}

export default CounterScreen;