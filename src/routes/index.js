import { useEffect } from "react";
import { useRoutes, useLocation, matchRoutes, useNavigationType   } from "react-router-dom";
import frontRoutes from "./web";
import AdminRoutes from "./admin";

export default function AppRoute() {
  const location = useLocation();
  const navigationType = useNavigationType();
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

  useEffect(() => {
    if (navigationType === "PUSH") {
      window.scrollTo({ top: 0, left: 0});
    }
  }, [location, navigationType]);


  return useRoutes(routes);
}
