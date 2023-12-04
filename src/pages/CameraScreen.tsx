import React from "react";
import { StyleSheet, View } from "react-native";
import { MyCamera } from "@components/";

const CameraScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <MyCamera />
    </View>
  );
};

export { CameraScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
