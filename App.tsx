import { SafeAreaView } from "react-native-safe-area-context";
import AuthProvider from "./src/context/auth/AuthProvider";
import Router from "./src/Router";
import { AppState, StyleSheet, Text, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import { COLOR_RED } from "./src/theme";

export default function App() {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState == "active"
      ) {
        console.log("App has come to the foreground!");
      }
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {appStateVisible == "inactive" ? (
        <View style={styles.background}>
          <Text>App Background</Text>
        </View>
      ) : (
        <AuthProvider>
          <Router />
        </AuthProvider>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLOR_RED,
    alignItems: "center",
    justifyContent: "center",
  },
});
