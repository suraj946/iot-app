import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./screens/Home";
import Schedule from "./screens/Schedule";
import Details from "./screens/Details";
import CurrentSchedule from "./screens/CurrentSchedule.jsx";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <>
    <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Schedule" component={Schedule} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="CurrentSchedule" component={CurrentSchedule} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default Main;
