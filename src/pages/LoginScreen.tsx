import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const loginButtonOnPress = () => {
    alert("ssss");
  };

  return (
    <View style={styles.page}>
      <Pressable style={styles.button} onPress={loginButtonOnPress}>
        <Text>Uygulamaya Giriş yap</Text>
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
