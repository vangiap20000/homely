import { Navigate } from "react-router-dom";
import Layout from "../Front/layout";
import NotFound from "../Front/pages/NotFound";
import Home from "../Front/pages/Home";

const routes = {
  path: "/",
  element: <Layout />,
  children: [
    { index: true, element: <Home /> },
    // { path: "login", element: <Login /> },
    { path: "not-found", element: <NotFound />, title: "404 Page | Property" },
    { path: "*", element: <Navigate to="/not-found" replace /> },
  ],
}

export default routes