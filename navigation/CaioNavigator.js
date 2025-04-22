import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Caio from "../screens/Caio";
import Caio2 from "../screens/Caio2";

const Stack = createNativeStackNavigator();

export default function CaioNavigator() {
    return (
        <Stack.Navigator initialRouteName="Caio" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Caio" component={Caio} />
            <Stack.Screen name="Caio2" component={Caio2} />
        </Stack.Navigator>
    );
}