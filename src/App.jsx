import "./App.css";
import AppRoute from "./routes";
import { ConfirmProvider } from "./contexts/ConfirmContext";

export default function App() {
  return (
    <ConfirmProvider>
      <AppRoute />
    </ConfirmProvider>
  );
}
