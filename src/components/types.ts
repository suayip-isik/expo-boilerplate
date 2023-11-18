import { GestureResponderEvent } from "react-native";

export interface IMyButton {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export interface IHelloText {
  language: string | undefined;
  name: string | undefined;
}
