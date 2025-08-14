import { AppRouter } from "./routes/AppRouter";
import { useEffect } from "react";
import "./index.css"

export default function App() {
  useEffect(() => {
    fetch("");
  }, []);

  return (
      <AppRouter />
  );
};
