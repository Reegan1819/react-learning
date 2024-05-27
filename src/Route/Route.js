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
import IntroduceMyself from "../Components/IntroduceMyself";
import FortyQuestions from "../Components/AboutReact/FortyQuestions";
import AboutReact from "../Components/CommonQuestions/AboutReact";
import AboutHooks from "../Components/CommonQuestions/AboutHooks";
import LifeCycleMethods from "../Components/CommonQuestions/LifeCycleMethods";
import ClassComp from "../Components/CommonQuestions/ClassComp";
import AboutKeys from "../Components/CommonQuestions/AboutKeys";
import HigherOrderComp from "../Components/CommonQuestions/HigherOrderComp";
import EcmaScript from "../Components/CommonQuestions/EcmaScript";
import Reconciliation from "../Components/CommonQuestions/Reconciliation";
import OptimizationTech from "../Components/CommonQuestions/OptimizationTeech";
import PerformanceReact from "../Components/CommonQuestions/Performance";
import VirtualDom from "../Components/CommonQuestions/VirtualDom";
import StateProps from "../Components/CommonQuestions/StateProps";
import ReduxLib from "../Components/CommonQuestions/ReduxLib";
import ServerSideRendering from "../Components/CommonQuestions/ServerSideRendering";
import SearchEngine from "../Components/CommonQuestions/SearchEngine";
import RouterLib from "../Components/CommonQuestions/RouterLib";
import Events from "../Components/CommonQuestions/Events";
import UseStateHooks from "../Components/CommonQuestions/UseStateHooks";
import UseEffectHooks from "../Components/CommonQuestions/UseEffectHooks";
import useContextHooks from "../Components/CommonQuestions/UseContectHooks";
import UseRefHooks from "../Components/CommonQuestions/UseRefHooks";
import UseReducerHooks from "../Components/CommonQuestions/UseReducerHooks";
import UseCallbackHooks from "../Components/CommonQuestions/UseCallbackHooks";
import LazyLoading from "../Components/CommonQuestions/LazyLoading";
import TypeScriptAbout from "../Components/JavascriptQ&A/TypeScriptAbout";
import AboutNextJs from "../Components/CommonQuestions/AboutNextJs";
import AboutTesting from "../Components/CommonQuestions/AbountTesting";

export const ABOUT_REACT = "/forty--react-js-interview-questions/aboutReact";
export const ABOUT_REACT_HOOKS =
  "/forty--react-js-interview-questions/aboutReactHooks";
export const ABOUT_LIFE_CYCLE =
  "/forty--react-js-interview-questions/aboutLifeCycle";
export const CLASS_COMPONENT =
  "/forty--react-js-interview-questions/classComponent";
export const ABOUT_KEYS = "/forty--react-js-interview-questions/keys";
export const HIGHER_ORDER_COMPONENT =
  "/forty--react-js-interview-questions/higherOrderComponent";
export const ECMA_SCRIPT6 = "/forty--react-js-interview-questions/ecmaScript6";
export const RECONCILIATION =
  "/forty--react-js-interview-questions/reconciliation";
export const OPTIMIZE = "/forty--react-js-interview-questions/optimize";
export const PERFORMANCE = "/forty--react-js-interview-questions/performance";
export const VIRTUAL_DOM = "/forty--react-js-interview-questions/virtualDom";
export const STATE_PROPS = "/forty--react-js-interview-questions/state";
export const REDUX = "/forty--react-js-interview-questions/redux";
export const SERVER_SIDE_RENDERING =
  "/forty--react-js-interview-questions/serverSideRendering";
export const SEARCH_ENGINE_OPTIMIZE =
  "/forty--react-js-interview-questions/searchEngineOptimize";
export const ROUTER = "/forty--react-js-interview-questions/router";
export const EVENTS = "/forty--react-js-interview-questions/events";
export const ABOUT_USE_STATE_HOOKS =
  "/forty--react-js-interview-questions/aboutReactHooks/useState";
export const ABOUT_USE_EFFECT_HOOKS =
  "/forty--react-js-interview-questions/aboutReactHooks/useEffect";
export const ABOUT_USE_CONTEXT_HOOKS =
  "/forty--react-js-interview-questions/aboutReactHooks/useContext";
export const ABOUT_USE_REF_HOOKS =
  "/forty--react-js-interview-questions/aboutReactHooks/useRef";
export const ABOUT_USE_REDUCER_HOOKS =
  "/forty--react-js-interview-questions/aboutReactHooks/useReducer";
export const ABOUT_USE_CALLBACK_HOOKS =
  "/forty--react-js-interview-questions/aboutReactHooks/useCallback";
export const ABOUT_USE_MEMO_HOOKS =
  "/forty--react-js-interview-questions/aboutReactHooks/useMemo";
export const ABOUT_USE_LAYOUT_EFFECT_HOOKS =
  "/forty--react-js-interview-questions/aboutReactHooks/useLayoutEffect";
export const ABOUT_USE_DEBUG_VALUE_HOOKS =
  "/forty--react-js-interview-questions/aboutReactHooks/useDebugValue";
export const ABOUT_USE_IMPERATIVE_HANDLE =
  "/forty--react-js-interview-questions/aboutReactHooks/useImperativeHandle";
export const LAZY_LOADING = "/forty--react-js-interview-questions/lazyLoading";

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
  },
  {
    path: "/intro-myself",
    component: IntroduceMyself,
  },
  {
    path: "/forty--react-js-interview-questions",
    component: FortyQuestions,
  },
  {
    path: "/forty--react-js-interview-questions/aboutReact",
    component: AboutReact,
  },
  {
    path: "/forty--react-js-interview-questions/aboutReactHooks",
    component: AboutHooks,
  },
  {
    path: "/forty--react-js-interview-questions/aboutLifeCycle",
    component: LifeCycleMethods,
  },
  {
    path: "/forty--react-js-interview-questions/classComponent",
    component: ClassComp,
  },
  {
    path: "/forty--react-js-interview-questions/keys",
    component: AboutKeys,
  },
  {
    path: "/forty--react-js-interview-questions/higherOrderComponent",
    component: HigherOrderComp,
  },
  {
    path: "/forty--react-js-interview-questions/ecmaScript6",
    component: EcmaScript,
  },
  {
    path: "/forty--react-js-interview-questions/reconciliation",
    component: Reconciliation,
  },
  {
    path: "/forty--react-js-interview-questions/optimize",
    component: OptimizationTech,
  },
  {
    path: "/forty--react-js-interview-questions/performance",
    component: PerformanceReact,
  },
  {
    path: "/forty--react-js-interview-questions/virtualDom",
    component: VirtualDom,
  },
  {
    path: "/forty--react-js-interview-questions/state",
    component: StateProps,
  },
  {
    path: "/forty--react-js-interview-questions/redux",
    component: ReduxLib,
  },
  {
    path: "/forty--react-js-interview-questions/serverSideRendering",
    component: ServerSideRendering,
  },
  {
    path: "/forty--react-js-interview-questions/searchEngineOptimize",
    component: SearchEngine,
  },
  {
    path: "/forty--react-js-interview-questions/router",
    component: RouterLib,
  },
  {
    path: "/forty--react-js-interview-questions/events",
    component: Events,
  },
  {
    path: ABOUT_USE_STATE_HOOKS,
    component: UseStateHooks,
  },
  {
    path: ABOUT_USE_EFFECT_HOOKS,
    component: UseEffectHooks,
  },
  {
    path: ABOUT_USE_CONTEXT_HOOKS,
    component: useContextHooks,
  },
  {
    path: ABOUT_USE_REF_HOOKS,
    component: UseRefHooks,
  },
  {
    path: ABOUT_USE_REDUCER_HOOKS,
    component: UseReducerHooks,
  },
  {
    path: ABOUT_USE_CALLBACK_HOOKS,
    component: UseCallbackHooks,
  },
  {
    path: ABOUT_USE_MEMO_HOOKS,
    component: UseCallbackHooks,
  },
  {
    path: ABOUT_USE_LAYOUT_EFFECT_HOOKS,
    component: UseCallbackHooks,
  },
  {
    path: ABOUT_USE_DEBUG_VALUE_HOOKS,
    component: UseCallbackHooks,
  },
  {
    path: ABOUT_USE_IMPERATIVE_HANDLE,
    component: UseCallbackHooks,
  },
  {
    path: LAZY_LOADING,
    component: LazyLoading,
  },
  {
    path: "/Typescript",
    component: TypeScriptAbout,
  },
  {
    path: "/NextJs",
    component: AboutNextJs,
  },
  {
    path: "/Testing",
    component: AboutTesting,
  },
];

export default RoutesList;
