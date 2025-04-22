import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Gabriel2() {
        const navigation = useNavigation();
        
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Gabriel")}>
                <Text style={styles.text}>Camisa 10</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
    },
    text: {
        fontSize: 36,
        textDecorationLine: "underline",
    },
});