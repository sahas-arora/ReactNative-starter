import React from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";

const names = [
    {name: 'Sahas', age: '25'},
    {name: 'Sahil', age: '25'},
    {name: 'Sagar', age: '25'},
    {name: 'Rav', age: '25'},
    {name: 'Shabad', age: '25'},
    {name: 'Dhanda', age: '25'},
    {name: 'Deep', age: '28'}
];

const ListScreen = () => {
    return(
        <FlatList 
            keyExtractor={friend => friend.key}
            data={names}
            renderItem={(element) => {
                return(
                <Text 
                    style={styles.listStyle}
                >
                    {element.item.name} - Age {element.item.age}
                </Text>

                )
            }}
        > 
        </FlatList>
    );
}

const styles = StyleSheet.create({
    listStyle: {
        fontSize: 20,
        marginVertical: 30
    }
});

export default ListScreen;