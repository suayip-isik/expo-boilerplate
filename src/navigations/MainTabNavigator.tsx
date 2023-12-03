import React from "react";
import { CameraScreen, HomeScreen, SettingsScreen } from "@pages/";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
      <Tab.Screen name="CameraScreen" component={CameraScreen} />
    </Tab.Navigator>
  );
};

export { MainTabNavigator };
