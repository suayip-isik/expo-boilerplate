import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeIcon from "../../assets/icons/HomeIcon.svg";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <HomeIcon width={24} height={24} />
    </View>
  );
};

export { HomeScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
