import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pereira from "../screens/Carboni";
import Carboni from "../screens/Pereira";

const Stack = createNativeStackNavigator();

export default function PereiraNavigator() {
    return (
        <Stack.Navigator initialRouteName="Pereira" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Pereira" component={Carboni} />
            <Stack.Screen name="Carboni" component={Pereira} />
        </Stack.Navigator>
    );
}