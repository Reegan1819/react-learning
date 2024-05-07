import React from "react";

const Hooks = () => {
  return (
    <div>
      <h1>Hooks</h1>
      <p>
        Hooks are functions that let you use state and other React features.
        Hooks are the new addition in React 16.8. They let you use state and
        other React features without writing a class. Hooks are backward
        compatible. Hooks are functions that let you "hook into" React state and
        lifecycle features from function components. Hooks are JavaScript
        functions, but they impose two additional rules:
      </p>
      <ul>
        <li>Only call Hooks at the top level.</li>
        <li>Only call Hooks from React functions.</li>
      </ul>
      <h2>There are 10 built-in Hooks in React:</h2>

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

      <h2>Advantages of Hooks:</h2>
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

      <h2>Disadvantages of Hooks:</h2>
      <p>
        Learning Curve: Hooks require learning a new way of writing React
        components, which might take time for developers used to class-based
        components. Breaking Changes: Transitioning existing code to hooks may
        cause issues, and older React versions don't support them. Complexity in
        Large Components: Using many hooks in large components can make the code
        harder to understand. Lifecycle Abstraction: Hooks abstract away the
        component lifecycle, which might make it less clear how and when certain
        actions happen. Custom Hook Overuse: Using custom hooks excessively can
        make code harder to follow. Tooling and Type Safety: Some tools and type
        safety features may not fully support hooks yet. Performance Concerns:
        Misusing hooks can lead to performance problems, like unnecessary
        re-renders.
      </p>

      <h2>
        useState: useState is a Hook that allows you to have state variables in
        functional components. useState returns an array with two elements. The
        first element is the current value of the state, and the second element
        is a state setter function. You can pass an initial value to useState.
        The initial value is used only during the first render. useState returns
        the current state and a function that lets you update it. useState is a
        new way to use the exact same capabilities that this.state provides in a
        class.
      </h2>

      <h2>useEffect:</h2>
      <p>
        useEffect is a Hook that lets you perform side effects in function
        components. useEffect is a close replacement for componentDidMount,
        componentDidUpdate, and componentWillUnmount in React classes. useEffect
        is called after the component is rendered. useEffect is called after the
        component is updated. useEffect is called after the component is
        unmounted. useEffect is called after the component is mounted. useEffect
        is called after the component is unmounted. useEffect is called after
        the component is updated. useEffect is called after the component is
        rendered. useEffect is called after the component is mounted. useEffect
        is called after the component is unmounted. useEffect is called after
        the component is updated. useEffect is called after the component is
        mounted. useEffect is called after the component is unmounted. useEffect
        is called after the component is updated.
      </p>

      <h2>useContext:</h2>
      <p>
        useContext is a Hook that allows you to use the context in functional
        components. useContext is a close replacement for static contextType in
        React classes. useContext is a close replacement for Context.Consumer in
        React classes. useContext is a close replacement for Context.Provider in
        React classes. useContext is a close replacement for Context.displayName
      </p>

      <h2>useReducer:</h2>
      {/* definition */}
      <p>
        useReducer is a built-in React hook that provides an alternative to
        useState for managing complex state logic in React components. While
        useState is generally used for managing simple state values or objects,
        useReducer is more suitable for managing state that involves multiple
        sub-values or complex update logic. The useReducer hook follows the same
        principles as the Reducer function in JavaScript, which is commonly used
        with the Array.reduce() method. It takes in a reducer function and an
        initial state, and returns the current state and a dispatch function
        <span>
          Here's the basic syntax of useReducer: const [state, dispatch] =
          useReducer(reducer, initialState);
        </span>
        state: Represents the current state value. dispatch: A function used to
        dispatch actions to update the state. reducer: A function that specifies
        how the state should be updated based on the dispatched action and the
        current state. initialState: The initial state value.
      </p>

      <h2>useCallback:</h2>
      <p>
        {` useCallback is a Hook that returns a memoized version of the callback
            function that only changes if one of the dependencies has changed. It
            is useful when passing callbacks to optimized child components that rely
            on reference equality to prevent unnecessary renders. useCallback(fn,
            deps) is equivalent to useMemo(() => fn, deps).
            `}
      </p>
      <h2>useMemo:</h2>
      <p>
        {` useMemo is a Hook that returns a memoized value. It is similar to
            useCallback, but it memoizes the result of the function call instead of
            the function itself. useMemo(fn, deps) is equivalent to useCallback(() =>
            fn(), deps).
            `}
        <br />
        useMemo is a built-in React hook that memoizes the result of a function,
        preventing unnecessary re-computation of that function's result on
        re-renders. It is used to optimize performance by caching the result of
        expensive computations and only recalculating them when one of the
        dependencies has changed.
      </p>

      <h2>useRef:</h2>
      <p>
        useRef is a built-in React hook that returns a mutable ref object whose
        .current property is initialized to the passed argument (initialValue).
        The returned object will persist for the full lifetime of the component.
        useRef is commonly used to store references to DOM elements or values
        that need to persist between renders without triggering a re-render.
      </p>

      <h2>useImperativeHandle:</h2>
      <p>
        useImperativeHandle is a built-in React hook that allows a parent
        component to interact with a child component's imperative methods or
        properties. It is commonly used in conjunction with forwardRef to expose
        specific methods or properties of a child component to its parent.
        useImperativeHandle(ref, createHandle, [deps]) ref: A ref object created
        using the useRef hook. createHandle: A function that creates the
        imperative handle. deps: An optional array of dependencies that, when
        changed, will trigger the creation of a new handle.
      </p>

      <h2>useLayoutEffect:</h2>
      <p>
        useLayoutEffect is a built-in React hook that is similar to useEffect,
        but it fires synchronously after all DOM mutations. It is commonly used
        to perform imperative DOM operations that require synchronous
        measurements or side effects. useLayoutEffect(fn, deps) is similar to
        useEffect, but it fires synchronously after all DOM mutations. It is
        commonly used to perform imperative DOM operations that require
        synchronous measurements or side effects.
      </p>

      <h2>useDebugValue:</h2>
      <p>
        useDebugValue is a built-in React hook that can be used to display a
        label for custom hooks in React DevTools. It is commonly used to provide
        additional information about custom hooks when inspecting them in the
        React DevTools. useDebugValue(value) value: The value to display in
        React DevTools.
      </p>

      <h2>Custom Hooks:</h2>

      <p>
        Custom Hooks are JavaScript functions that allow you to reuse logic
        across multiple components. They are a way to extract and share common
        logic between components without repeating code. Custom Hooks follow the
        naming convention useSomething, where Something is a descriptive name
        for the logic being shared. Custom Hooks can use other Hooks, including
        built-in Hooks and other custom Hooks. Custom Hooks can accept arguments
        to customize their behavior. Custom Hooks can return values to be used
        in the component. Custom Hooks can be shared and reused across different
        components. Custom Hooks can be tested like regular functions. Custom
        Hooks can be used to encapsulate complex logic and make components more
        readable and maintainable.
      </p>
    </div>
  );
};

export default Hooks;
