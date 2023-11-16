import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "./context/auth/useAuthContext";
import AuthNavigator from "./navigation/AuthNavigator";
import MainTabNavigator from "./navigation/MainTabNavigator";

const Router = () => {
  const { isAuthenticated } = useAuthContext();
  return (
    <NavigationContainer>
      {isAuthenticated ? <MainTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
