import { useRoutes } from "react-router-dom";
import frontRoutes from "./web";
import AdminRoutes from "./admin";

export default function AppRoute() {
  return useRoutes([frontRoutes, AdminRoutes]);
}