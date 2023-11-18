import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { IMyButton } from "./types";

const MyButton: React.FC<IMyButton> = ({ onPress }) => {
  return (
    <TouchableOpacity testID="MyButton:Click:ClickMe" onPress={onPress}>
      <Text>this MyButton has been created for testing</Text>
    </TouchableOpacity>
  );
};

export { MyButton };
