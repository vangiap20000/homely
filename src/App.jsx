import "./App.css";
import AppRoute from "./routes";
import { ConfirmProvider } from "./contexts/ConfirmContext";
import ToastHandler from "./components/ToastHandler";
import { ToastContainer } from "react-toastify";
import GlobalLoading from "./components/GlobalLoading";

export default function App() {
  return (
    <ConfirmProvider>
      <GlobalLoading />
      <ToastHandler />
      <ToastContainer />
      <AppRoute />
    </ConfirmProvider>
  );
}
