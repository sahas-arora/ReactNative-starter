import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={styles.homeView}
    >
      <Text style={styles.text}>
        Hello!!
        {/* <ComponentsScreen /> */}
        </Text>
        <Button 
          title="Go to Components Screen!"
          onPress={() => navigation.navigate('Components')}
        />
        <Button 
          title="Go to List Screen!"
          onPress={() => navigation.navigate('ListScreen')}
        />
        <Button 
        title="Go to Image Screen!"
        onPress={() => navigation.navigate('ImageScreen')} 
        />
        
        <Button 
        title="Go to Counter Screen!"
        onPress={() => navigation.navigate('CounterScreen')} 
        />

        <Button
        title="Go to Color Screen!"
        onPress={() => navigation.navigate('ColorScreen')} 
        />

        <Button
        title="Go to Color Change Screen!"
        onPress={() => navigation.navigate('ColorChangeScreen')} 
        />

        <Button
        title="Go to Name Display Screen!"
        onPress={() => navigation.navigate('NameDisplayingScreen')} 
        />

        <Button
        title="Go to Box Screen!"
        onPress={() => navigation.navigate('BoxScreen')} 
        />


        {/* <TouchableOpacity onPress={() =>console.log("Here")}>
          <Text>Go to List Screen!</Text>
        </TouchableOpacity> */}
    </View>
  )
};

const styles = StyleSheet.create({
  homeView: {
    backgroundColor: 'rgb(40, 40, 40)',
    height: 1000

  },
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

