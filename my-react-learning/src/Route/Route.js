import React from "react";
import Home from "../Components/Home";

const RoutesList = [
  {
    path: "/",
    component: Home,
    exact: true,
  },

  {
    path: "/about-react",
    component: React.lazy(() => {
      return new Promise((resolve) => {
        // Wrap the code that suspends with startTransition
        React.startTransition(() => {
          resolve(import("../Components/AboutReact/ReactNew"));
        });
      });
    }),
    exact: true,
  },
  {
    path: "/about-react-hooks",
    component: React.lazy(() => {
      return new Promise((resolve) => {
        React.startTransition(() => {
          resolve(import("../Components/Hooks"));
        });
      });
    }),
  },

  {
    path: "/about-react-router",
    component: React.lazy(() => {
      return new Promise((resolve) => {
        React.startTransition(() => {
          resolve(import("../Components/AboutReact/ReactRouter"));
        });
      });
    }),
  },
];

export default RoutesList;
