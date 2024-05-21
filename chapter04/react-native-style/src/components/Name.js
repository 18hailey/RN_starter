import React from 'react';
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create(
    {
        container: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
        text: {
            fontSize: 30,
            fontWeight: 300
        }
});

const Names = (props) => {
    console.log("name props: " + typeof(props));
    console.log(props);
    return (
        <View style={styles.container}>
            <Text style={{fontSize:50, fontWeight:300}}>{props.name}</Text>
        </View>
    );
};
export default Names;