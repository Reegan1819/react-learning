import React from "react";
import { Link } from "react-router-dom";
import {
  ABOUT_REACT_HOOKS,
  ABOUT_LIFE_CYCLE,
  CLASS_COMPONENT,
  ABOUT_KEYS,
  HIGHER_ORDER_COMPONENT,
  ECMA_SCRIPT6,
  RECONCILIATION,
  OPTIMIZE,
  PERFORMANCE,
  VIRTUAL_DOM,
  STATE_PROPS,
  REDUX,
  SERVER_SIDE_RENDERING,
  SEARCH_ENGINE_OPTIMIZE,
  ROUTER,
  EVENTS,
  ABOUT_REACT,
  LAZY_LOADING,
} from "../../Route/Route";

const FortyQuestions = () => {
  return (
    <div style={{ padding: " 20px" }}>
      <ol>
        <li>
          <Link to={ABOUT_REACT}>What is react?</Link>
        </li>
        <br />
        <li>
          <Link to={ABOUT_REACT_HOOKS}>What are React Hooks?</Link>
        </li>
        <br />
        <li>
          <Link to={ABOUT_LIFE_CYCLE}>What are lifecycle methods?</Link>
        </li>
        <br />
        <li>
          <Link to={CLASS_COMPONENT}>What is a class component?</Link>
        </li>
        <br />
        <li>
          <Link to={ABOUT_KEYS}>What are keys?</Link>
        </li>
        <br />
        <li>
          <Link to={HIGHER_ORDER_COMPONENT}>
            What is a higher order component?
          </Link>
        </li>
        <br />
        <li>
          <Link to={ECMA_SCRIPT6}>What is ECMAScript 6?</Link>
        </li>
        <br />
        <li>
          <Link to={RECONCILIATION}>What is reconciliation?</Link>
        </li>
        <br />
        <li>
          <Link to={OPTIMIZE}>How can you optimize React?</Link>
        </li>
        <br />
        <li>
          <Link to={PERFORMANCE}>How does React improve performance?</Link>
        </li>
        <br />
        <li>
          <Link to={VIRTUAL_DOM}>What is the virtual DOM?</Link>
        </li>
        <br />
        <li>
          <Link to={STATE_PROPS}>What are props and state?</Link>
        </li>
        <br />
        <li>
          <Link to={REDUX}>What is Redux?</Link>
        </li>
        <br />
        <li>
          <Link to={SERVER_SIDE_RENDERING}>What is server-side rendering?</Link>
        </li>
        <br />
        <li>
          <Link to={SEARCH_ENGINE_OPTIMIZE}>
            How can you optimize a React application for search engines?
          </Link>
        </li>
        <br />
        <li>
          <Link to={ROUTER}>What is React Router?</Link>
        </li>
        <br />
        <li>
          <Link to={EVENTS}>How do you handle events in React?</Link>
        </li>
        <br />
        <li>
          <Link to={LAZY_LOADING}>What is lazy loading?</Link>
        </li>
      </ol>
    </div>
  );
};

export default FortyQuestions;
