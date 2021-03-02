import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import imageObject from "../helpers/imageDetailObject";

import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return(
        <View style={styles.ImageScreenStyle}>
            {/* <ImageDetail title="Forest" image={require("../images/forest.jpg")} /> */}
            <FlatList 
                keyExtractor={img => img.title}
                data={imageObject}
                renderItem={(img) => {
                    return(
                        <ImageDetail 
                            title= {img.item.title}
                            image= {img.item.image}
                        />
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    ImageScreenStyle: {
        height: 1000,
        display: "flex",
        flexDirection: "column"
        }
});

export default ImageScreen;