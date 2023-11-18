import { Text, View } from "react-native";
import React from "react";
import { IHelloText } from "./types";
import { setWelcomeText } from "../utils";

const HelloText: React.FC<IHelloText> = ({ language, name }) => {
  return (
    <View>
      <Text>
        {setWelcomeText(language)} {name}
      </Text>
    </View>
  );
};

export { HelloText };
