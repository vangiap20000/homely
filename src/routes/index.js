import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useLocation, matchRoutes } from "react-router-dom";
import frontRoutes from "./web";
import AdminRoutes from "./admin";

export default function AppRoute() {
  const location = useLocation();
  const routes = [frontRoutes, AdminRoutes];
  
  useEffect(() => {
    const matched = matchRoutes(routes, location);

    if (matched) {
      const route = matched[matched.length - 1]?.route;
      if (route?.title) {
        document.title = route.title;
      } else {
        document.title = "Homely";
      }
    }
  }, [location]);

  return useRoutes(routes);
}
