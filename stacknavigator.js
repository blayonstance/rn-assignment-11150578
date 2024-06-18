import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

const Stack = createNativeStackNavigator();

const Stacknavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dasboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default Stacknavigator;

const styles = StyleSheet.create({});
