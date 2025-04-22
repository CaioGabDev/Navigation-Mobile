import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Marcello from "../screens/Marcello";
import Alex from "../screens/Alex";

const Stack = createNativeStackNavigator();

export default function MarcelloNavigator() {
    return (
        <Stack.Navigator initialRouteName="Marcello" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Marcello" component={Marcello} />
            <Stack.Screen name="Alex" component={Alex} />
        </Stack.Navigator>
    );
}