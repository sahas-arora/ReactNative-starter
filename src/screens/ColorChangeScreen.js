import React, { useState, useReducer } from "react";
import { View, StyleSheet, Text } from "react-native";

import ColorChangeButton from "../components/ColorChangeButton";

const CHANGE = 15;

const reducer = (state, action) => { //Action is basically an object that tells you how we would and should change our state
    //state === { red: number, green: number, blue: number }
    //action === { colourToChange: 'red' || 'green' || 'blue', amounwt: 15 || -15 }

    switch(action.type) {
        case 'change_red':
           return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : { ...state, red: state.red + action.payload };
        case 'change_green':
           return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : { ...state, green: state.green + action.payload };
        case 'change_blue':
           return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
};


const ColorChangeScreen = () => {


    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;
    console.log(state);

    // const [red, changeRed] = useState(0);
    // const [green, changeGreen] = useState(0);
    // const [blue, changeBlue] = useState(0);

    // const setColor = (color, change) => {
    //     switch(color) {
    //         case "red":
    //             red + change > 255 || red + change < 0 ? null : changeRed(red + change);
    //             return;
    //         case "green":
    //             green + change > 255 || green + change < 0 ? null : changeGreen(green + change);
    //             return;
    //         case "blue":
    //             blue + change > 255 || blue + change < 0 ? null : changeBlue(blue + change);
    //             return;
    //         default:
    //             return;
    //     }
    // }

    return(
        <View>
            <ColorChangeButton
            color="Red" 
            onIncrease={() => dispatch({ type: 'change_red', payload: CHANGE}) }
            onDecrease={() =>  dispatch({ type: 'change_red', payload: CHANGE * -1})} 
            />

            <ColorChangeButton 
            color="Green" 
            onIncrease={() =>  dispatch({ type: 'change_green', payload: CHANGE})} 
            onDecrease={() =>  dispatch({ type: 'change_green', payload: CHANGE * -1})} 
            />

            <ColorChangeButton 
            color="Blue" 
            onIncrease={() => dispatch({ type: 'change_blue', payload: CHANGE}) } 
            onDecrease={() => dispatch({ type: 'change_blue', payload: CHANGE * -1}) } 
            />


            <View style={{ width: 100, height: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>

        </View>
    );
}


export default ColorChangeScreen;