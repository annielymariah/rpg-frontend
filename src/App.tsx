import { AuthProvider } from "./context/auth";
import { AppRouter } from "./routes/AppRouter";
import { useEffect } from "react";
import "./index.css"

export default function App() {
  useEffect(() => {
    fetch("");
  }, []);

  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
