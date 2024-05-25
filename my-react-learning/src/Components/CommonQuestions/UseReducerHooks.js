import React, { useEffect } from "react";

const UseReducerHooks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "useReducer Hooks";
  }, []);

  return (
    <div>
      <h1>useReducer Hooks</h1>
      <p>
        useReducer is a Hook that is used for state management in React. It is
        an alternative to useState. useState is built using useReducer.
        useReducer is usually preferable to useState when you have complex state
        logic that involves multiple sub-values or when the next state depends
        on the previous one.
      </p>
      <h2>What are the rules of useReducer?</h2>
      <p>
        useReducer is a Hook that accepts a reducer function and an initial
        state and returns the current state paired with a dispatch method. The
        dispatch method allows you to dispatch actions to change the state.
      </p>
      <h2>What are the advantages of useReducer?</h2>
      <p>
        useReducer can help you manage complex state logic in a more organized
        way. It can also help you avoid prop drilling by providing a way to pass
        data through the component tree without having to pass props down
        manually at every level.
      </p>
      <h2>How to use useReducer?</h2>
      <p>
        useReducer takes a reducer function and an initial state as arguments
        and returns an array with the current state value and a dispatch
        function. The reducer function takes two arguments: the current state
        and an action object, and returns the new state.
      </p>
      <h2>What are the advantages of using useReducer over useState?</h2>
      <p>
        useReducer is usually preferable to useState when you have complex state
        logic that involves multiple sub-values or when the next state depends
        on the previous one. It can help you manage complex state logic in a
        more organized way.
      </p>
      <h2>explain useReducer and useState in React and when to use each one</h2>
      <p>
        useState is a Hook that allows you to have state variables in functional
        components. You pass the initial state to this function and it returns a
        variable with the current state value (not necessarily the initial
        state) and another function to update this value. useReducer is a Hook
        that is used for state management in React. It is an alternative to
        useState. useState is built using useReducer. useReducer is usually
        preferable to useState when you have complex state logic that involves
        multiple sub-values or when the next state depends on the previous one.
      </p>
    </div>
  );
};

export default UseReducerHooks;
