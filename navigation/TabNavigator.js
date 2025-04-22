import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MarcelloNavigator from "./MarcelloNavigator";
import PereiraNavigator from "./PereiraNavigator";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Neymar"
            screenOptions={{
                headerShown: true,
                headerTitle: "Melhor do mundo",
                headerStyle: {
                    backgroundColor: "translucent",
                    height: 100,    
                },
                headerTintColor: "white",
                headerTitleStyle: {
                    fontSize: 30,
                    color: "black",
                },
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: "lightgray",
                    borderRadius: 50,
                    height: 100,
                    position: "absolute",
                },
                tabBarLabelStyle: {
                    fontSize: 20,
                },
                tabBarIconStyle: {
                    marginTop: 15,
                    marginBottom: 5,
                },
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "black",
            }}
        >
            <Tab.Screen
                name="Neymar"
                component={MarcelloNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="rocket" color={color} size={size} />,
                }}
            />
             <Tab.Screen
        name="Junior"
        component={PereiraNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="dice" color={color} size={size} />
          ),
        }}
      />
        </Tab.Navigator>
    );
}