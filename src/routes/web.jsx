import { Navigate } from "react-router-dom";
import Layout from "../layouts/Front";
import NotFound from "../pages/Front/NotFound";
import Home from "../pages/Front/Home";
import Blogs from "../pages/Front/Blog";
import Properties from "../pages/Front/Property";
import Contact from "../pages/Front/Contact";
import { categories } from "../constants/const";
import Login from "../pages/Front/Auth/login";
import Register from "../pages/Front/Auth/register";
import PrivacyPolicy from "../pages/Front/Privacy Policy";
import ForgotPassword from "../pages/Front/Auth/forgotPassword";
import BlogDetail from "../pages/Front/Blog/detail";
import PropertyDetail from "../pages/Front/Property/detail";
import Profile from "../pages/Front/Profile";
import PrivateRoute from "./PrivateRoute";

let routes = {
  path: "/",
  element: <Layout />,
  children: [
    { index: true, element: <Home /> },
    { path: "login", element: <Login /> },
    { path: "signup", element: <Register /> },
    { path: "privacy-policy", element: <PrivacyPolicy /> },
    { path: "forgot-password", element: <ForgotPassword /> },
    { path: "properties", element: <Properties />, title: "Properties | Homely" },
    { path: "properties/:slug", element: <PropertyDetail />, title: "Property detail | Homely" },
    { path: "blogs", element: <Blogs />, title: "Blogs | Homely" },
    { path: "blogs/:id", element: <BlogDetail />, title: "Blogs | Homely" },
    { path: "not-found", element: <NotFound />, title: "404 Page | Homely" },
    { path: "contactus", element: <Contact />, title: "Contact Us | Homely" },
    {
      path: "profile", element: (<PrivateRoute>
        <Profile />
      </PrivateRoute>
      ),
      title: "Profile | Homely"
    },
    { path: "*", element: <Navigate to="/not-found" replace /> },
  ],
}

categories.map((item) => {
  routes.children.push({ path: item.slug, element: <Properties category={item} />, title: `${item.title} | Homely` })
})

routes = { ...routes, children: [...routes.children,] }

export default routes