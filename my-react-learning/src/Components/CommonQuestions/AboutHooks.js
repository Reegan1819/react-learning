import React from "react";
import { Link } from "react-router-dom";
import {
  ABOUT_USE_STATE_HOOKS,
  ABOUT_USE_EFFECT_HOOKS,
  ABOUT_USE_CONTEXT_HOOKS,
  ABOUT_USE_REDUCER_HOOKS,
  ABOUT_USE_CALLBACK_HOOKS,
  ABOUT_USE_MEMO_HOOKS,
  ABOUT_USE_REF_HOOKS,
  ABOUT_USE_IMPERATIVE_HANDLE,
  ABOUT_USE_LAYOUT_EFFECT_HOOKS,
  ABOUT_USE_DEBUG_VALUE_HOOKS,
} from "../../Route/Route";

const AboutHooks = () => {
  return (
    <div style={{ padding: " 20px" }}>
      <h2> Define Hooks in React</h2>
      <p>
        Hooks are functions that let you use state and other React features in
        functional components. They are introduced in React 16.8 to allow you to
        use state and other React features without writing a class.
      </p>
      <h2>What are the rules of Hooks?</h2>
      <p>
        Hooks are JavaScript functions, but they impose two additional rules:
      </p>
      <ul>
        <li>Only call Hooks at the top level.</li>
        <li>Only call Hooks from React functions.</li>
      </ul>

      <h2>What are the advantages of Hooks?</h2>
      <ul>
        <li>Code Reusability</li>
        <li>Code Readability</li>
        <li>Code Maintainability</li>
        <li>Code Organization</li>
        <li>Code Consistency</li>
        <li>Code Performance</li>
        <li>Code Quality</li>
        <li>Code Scalability</li>
        <li>Code Simplicity</li>
        <li>Code Consistency</li>
      </ul>
      <h2>List of Hooks in React</h2>

      <ul>
        <li>useState</li>
        <li>useEffect</li>
        <li>useContext</li>
        <li>useReducer</li>
        <li>useCallback</li>
        <li>useMemo</li>
        <li>useRef</li>
        <li>useImperativeHandle</li>
        <li>useLayoutEffect</li>
        <li>useDebugValue</li>
      </ul>

      <h2>List of Hooks</h2>
      <ul>
        <li>
          <Link to={ABOUT_USE_STATE_HOOKS}>useState</Link>
        </li>
        <br />
        <li>
          <Link to={ABOUT_USE_EFFECT_HOOKS}>useEffect</Link>
        </li>
        <br />
        <li>
          <Link to={ABOUT_USE_CONTEXT_HOOKS}>useContext</Link>
        </li>
        <br />
        <li>
          <Link to={ABOUT_USE_REDUCER_HOOKS}>useReducer</Link>
        </li>
        <br />
        <li>
          <Link to={ABOUT_USE_CALLBACK_HOOKS}>useCallback</Link>
        </li>
        <br />
        <li>
          <Link to={ABOUT_USE_MEMO_HOOKS}>useMemo</Link>
        </li>
        <br />
        <li>
          <Link to={ABOUT_USE_REF_HOOKS}>useRef</Link>
        </li>
        <br />
        <li>
          <Link to={ABOUT_USE_IMPERATIVE_HANDLE}>useImperativeHandle</Link>
        </li>
        <br />
        <li>
          <Link to={ABOUT_USE_LAYOUT_EFFECT_HOOKS}>useLayoutEffect</Link>
        </li>
        <br />
        <li>
          <Link to={ABOUT_USE_DEBUG_VALUE_HOOKS}>useDebugValue</Link>
        </li>
      </ul>
    </div>
  );
};

export default AboutHooks;
