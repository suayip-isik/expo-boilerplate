import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { COLOR_RED, COLOR_WHITE } from "../theme";

const MyCamera: React.FC = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    requestPermission();
    console.log(permission);
  }, []);

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  if (!permission?.granted) {
    return <Text>Kamera ya izin verilmemiş </Text>;
  }
  return (
    <Camera style={styles.camera} type={type}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleCameraType}>
          <Text style={styles.buttonText}>Change Camera</Text>
        </TouchableOpacity>
      </View>
    </Camera>
  );
};

export { MyCamera };

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    borderWidth: 3,
    borderColor: COLOR_WHITE,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR_RED,
  },
  buttonText: {
    color: COLOR_WHITE,
    fontSize: 20,
  },
});
