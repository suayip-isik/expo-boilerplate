import AuthProvider from "./src/context/auth/AuthProvider";
import Router from "./src/Router";

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
