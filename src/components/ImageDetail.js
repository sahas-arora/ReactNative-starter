import React from "react";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";

const ImageDetail = (props) => {

    return(
        <View
            style={styles.imageDetail}
        >
            <Image source={props.image} />
            <Text style={styles.imageTitle}>
                {props.title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    imageDetail : {
        display : "flex",
        flexDirection : "row",
        justifyContent: "space-around",
        marginTop: 20
    },
    imageTitle : {
        fontSize: 20,
        alignSelf: "center"
    }
})

export default ImageDetail;