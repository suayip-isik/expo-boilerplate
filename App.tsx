import { SafeAreaView } from "react-native-safe-area-context";
import AuthProvider from "./src/context/auth/AuthProvider";
import Router from "./src/Router";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </SafeAreaView>
  );
}
