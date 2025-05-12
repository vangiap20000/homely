// src/components/RouteChangeTracker.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const RouteChangeTracker = () => {
  NProgress.configure({ showSpinner: false });
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 500);

    return () => {
      clearTimeout(timeout);
      NProgress.done();
    };
  }, [location.pathname]);

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleDone = () => NProgress.done();
    // Listen to route change events
    window.addEventListener('beforeunload', handleStart);
    // window.addEventListener('load', handleDone);
    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleStart);
      window.removeEventListener('load', handleDone);
    };
  }, []);

  return null;
};

export default RouteChangeTracker;
