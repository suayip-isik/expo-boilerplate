import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "@context/auth";
import { MainTabNavigator, AuthNavigator } from "@navigations";

const Router = () => {
  // const { isAuthenticated } = useAuthContext();
  let isAuthenticated = true;
  return (
    <NavigationContainer>
      {isAuthenticated ? <MainTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
