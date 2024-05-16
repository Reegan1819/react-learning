import React, { lazy, startTransition } from "react";
import Home from "../Components/Home";
import ReactNew from "../Components/AboutReact/ReactNew";
import LifeCycle from "../Components/AboutReact/LifeCycle";
import Optimization from "../Components/AboutReact/Optimization";
import DesignPattern from "../Components/AboutReact/DesignPattern";
import SearchEngineOptimize from "../Components/AboutReact/SearchEngineOptimize";
import PureComponent from "../Components/AboutReact/PureComponent";
import ControlledUncontrolled from "../Components/AboutReact/ControlledUncontrolled";
import ReactInterviewQuestion from "../Components/AboutReact/ReactInterviewQuestion";
import FrontendInterviewQuestion from "../Components/Frontend/FrontendInterviewQuestion";
import JavaScriptQuestions from "../Components/JavascriptQ&A/JavaScriptQuestions";

const RoutesList = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/about-react",
    component: ReactNew,
    exact: true,
  },
  {
    path: "/about-react-hooks",
    component: lazy(() => {
      return new Promise((resolve) => {
        startTransition(() => {
          resolve(import("../Components/Hooks"));
        });
      });
    }),
  },
  {
    path: "/about-react-router",
    component: lazy(() => {
      return new Promise((resolve) => {
        startTransition(() => {
          resolve(import("../Components/AboutReact/ReactRouter"));
        });
      });
    }),
  },
  {
    path: "/about-react-redux",
    component: lazy(() => {
      return new Promise((resolve) => {
        startTransition(() => {
          resolve(import("../Components/AboutReact/ReactRedux"));
        });
      });
    }),
  },
  {
    path: "/about-react-pure-component",
    component: lazy(() => {
      return new Promise((resolve) => {
        startTransition(() => {
          resolve(import("../Components/AboutReact/PureComponent"));
        });
      });
    }),
  },
  {
    path: "/about-life-cycle-methods",
    component: LifeCycle,
    exact: true,
  },
  {
    path: "/about-react-optimize",
    component: Optimization,
  },
  {
    path: "/about-react-design-patterns",
    component: DesignPattern,
  },
  {
    path: "/about-react-search-engine-optimization",
    component: SearchEngineOptimize,
  },
  {
    path: "/about-react-control-uncontrolled",
    component: ControlledUncontrolled,
  },
  {
    path: "/about-react-interview-questions",
    component: ReactInterviewQuestion,
  },
  {
    path: "/frontend-interview-questions",
    component: FrontendInterviewQuestion,
  },
  {
    path: "/frontend-interview-questions/javascript",
    component: JavaScriptQuestions,
  }
];

export default RoutesList;
