import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Gabriel2 from "../screens/Gabriel";
import Gabriel from "../screens/Gabriel2";

const Stack = createNativeStackNavigator();

export default function Gabriel2Navigator() {
    return (
        <Stack.Navigator initialRouteName="Gabriel2" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Gabriel2" component={Gabriel} />
            <Stack.Screen name="Gabriel" component={Gabriel2} />
        </Stack.Navigator>
    );
}