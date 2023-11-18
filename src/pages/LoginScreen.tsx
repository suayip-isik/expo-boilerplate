import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAuthContext } from "../context/auth/useAuthContext";

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { login } = useAuthContext();
  const loginButtonOnPress = () => {
    // login({ userName: "", password: "", isRememberMe: true });
  };

  return (
    <View style={styles.page}>
      <Pressable style={styles.button} onPress={loginButtonOnPress}>
        <Text>Login Screen</Text>
      </Pressable>
    </View>
  );
};

export { LoginScreen };

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: "lightblue",
  },
});
