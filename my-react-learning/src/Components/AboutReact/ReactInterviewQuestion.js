import React, { useEffect, useState } from "react";

const ReactInterviewQuestion = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search

  const handleSearch = () => {
    setSearch(text);
    setSearchResults([...searchResults, text]);
    setText("");
  };

  //function to find keywords in p tag and highlight them and scroll to that position

  //   useEffect(() => {
  //     const pTags = document.querySelectorAll("p");
  //     pTags.forEach((pTag) => {
  //       const text = pTag.innerText;
  //       const regex = new RegExp(search, "gi");
  //       const newText = text.replace(
  //         regex,
  //         `<span style="background-color: yellow">${search}</span>`
  //       );
  //       pTag.innerHTML = newText;
  //     });
  //   }, [search]);

  //function to scroll to the position of the keyword

  const handlePosition = () => {
    const hTags = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    hTags.forEach((hTag) => {
      const text = hTag.innerText;
      const regex = new RegExp(search, "gi");
      const newText = text.replace(
        regex,
        `<span style="background-color: yellow">${search}</span>`
      );
      hTag.innerHTML = newText;
      const span = hTag.querySelector("span");
      if (span) {
        span.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  //function to scroll to the top position

  const handleTopPosition = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div>
        <h2>Search Box</h2>
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        {search && <p>Search Results for: {search}</p>}
        <button
          onClick={handleTopPosition}
          style={{ position: "fixed", top: "10px", right: "65px" }}
        >
          Up Arrow
        </button>
        <button
          onClick={handlePosition}
          style={{ position: "fixed", top: "10px", right: "10px" }}
        >
          Down
        </button>
      </div>
      <h2>React Interview Questions</h2>
      <p>
        In this section, we will discuss some common React interview questions.
      </p>
      <h3>What is React?</h3>
      <p>
        React is a JavaScript library for building user interfaces. It is
        maintained by Facebook and a community of individual developers and
        companies. React allows developers to create large web applications that
        can change data, without reloading the page. The main features of React
        are:
      </p>
      <ul>
        <li>It uses a virtual DOM to improve performance.</li>
        <li>It allows developers to create reusable UI components.</li>
        <li>
          It uses a unidirectional data flow to manage the state of the
          application.
        </li>
      </ul>
      <h3>What are the key features of React?</h3>
      <p>Some of the key features of React are:</p>

      <ul>
        <li>Component-based architecture</li>
        <li>Virtual DOM</li>
        <li>JSX</li>
        <li>One-way data binding</li>
        <li>React Native</li>
        <li>React Router</li>
        <li>React Redux</li>
        <li>React Hooks</li>
        <li>React Context</li>
        <li>React Fiber</li>
      </ul>
      <h3>What is JSX?</h3>
      <p>
        JSX is a syntax extension for JavaScript that allows developers to write
        HTML elements and JavaScript code together. JSX makes it easier to write
        and read React components. JSX is not a requirement for using React, but
        it is a popular feature that many developers find helpful.
      </p>
      <h3>What is a component in React?</h3>
      <p>
        A component is a reusable piece of code that defines the structure and
        behavior of a part of a user interface. Components are the building
        blocks of React applications. There are two types of components in
        React: functional components and class components.
      </p>
      <h3>What is a state in React?</h3>
      <p>
        State is a JavaScript object that stores data that affects the behavior
        of a component. State allows components to create dynamic and
        interactive user interfaces. State can be changed over time in response
        to user actions, network responses, and other events.
      </p>
      <h3>What is props in React?</h3>
      <p>
        Props are short for properties and are used to pass data from one
        component to another. Props are read-only and cannot be changed by the
        component that receives them. Props are used to customize and configure
        components in React applications.
      </p>
      <h3>What is the difference between state and props in React?</h3>
      <p>
        State and props are both used to pass data to components in React, but
        they serve different purposes. State is used to manage data that changes
        over time within a component, while props are used to pass data from a
        parent component to a child component. State is mutable and can be
        changed by the component that owns it, while props are read-only and
        cannot be changed by the component that receives them.
      </p>
      <h3>What are React hooks?</h3>
      <p>
        React hooks are functions that let developers use state and other React
        features in functional components. Hooks provide a way to add stateful
        logic to functional components without having to convert them to class
        components. React hooks were introduced in React 16.8 and have become a
        popular way to write React components.
      </p>
      <h3>What are the advantages of using React hooks?</h3>
      <p>Some of the advantages of using React hooks are:</p>
      <ul>
        <li>Code reusability</li>
        <li>Code readability</li>
        <li>Code maintainability</li>
        <li>Code organization</li>
        <li>Code consistency</li>
        <li>Code performance</li>
        <li>Code quality</li>
        <li>Code scalability</li>
        <li>Code simplicity</li>
      </ul>

      <h3>What are the disadvantages of using React hooks?</h3>
      <p>Some of the disadvantages of using React hooks are:</p>
      <ul>
        <li>Learning curve</li>
        <li>Breaking changes</li>
        <li>Complexity in large components</li>
        <li>Lifecycle abstraction</li>
        <li>Custom hook overuse</li>
        <li>Tooling and type safety</li>
        <li>Performance concerns</li>
      </ul>

      <h3>What are the built-in hooks in React?</h3>
      <p>There are 10 built-in hooks in React:</p>

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

      <h3>What is the purpose of the useState hook in React?</h3>
      <p>
        The useState hook in React is used to add state to functional
        components. State allows components to create dynamic and interactive
        user interfaces. The useState hook takes an initial value as an argument
        and returns an array with two elements: the current state value and a
        function to update the state. The useState hook is called inside the
        component function to add state to the component.
      </p>

      <h3>What is the purpose of the useEffect hook in React?</h3>
      <p>
        The useEffect hook in React is used to perform side effects in
        functional components. Side effects include data fetching,
        subscriptions, or manually changing the DOM. The useEffect hook takes a
        function as an argument, which is called after the component renders.
        The useEffect hook can also return a cleanup function to clean up any
        resources created by the side effect.
      </p>

      <h3>What is the purpose of the useContext hook in React?</h3>
      <p>
        The useContext hook in React is used to access context in functional
        components. Context provides a way to pass data through the component
        tree without having to pass props down manually at every level. The
        useContext hook takes a context object as an argument and returns the
        current value of that context.
      </p>

      <h3>What is the purpose of the useReducer hook in React?</h3>

      <p>
        The useReducer hook in React is used to manage complex state logic in
        functional components. The useReducer hook takes a reducer function and
        an initial state as arguments, and returns the current state and a
        dispatch function. The useReducer hook is similar to the useState hook,
        but is more suitable for managing state that involves multiple
        sub-values or complex state transitions.
      </p>

      <h3>What is the purpose of the useCallback hook in React?</h3>
      <p>
        The useCallback hook in React is used to memoize functions and prevent
        unnecessary re-renders in functional components. The useCallback hook
        takes a function and an array of dependencies as arguments, and returns
        a memoized version of the function. The useCallback hook is useful for
        optimizing performance in components that rely on functions that are
        recreated on every render.
      </p>

      <h3>What is the purpose of the useMemo hook in React?</h3>
      <p>
        The useMemo hook in React is used to memoize values and prevent
        unnecessary re-computations in functional components. The useMemo hook
        takes a function and an array of dependencies as arguments, and returns
        a memoized value. The useMemo hook is useful for optimizing performance
        in components that rely on expensive calculations or data
        transformations.
      </p>

      <h3>What is the purpose of the useRef hook in React?</h3>
      <p>
        The useRef hook in React is used to create mutable references to DOM
        elements or values that persist between renders. The useRef hook takes
        an initial value as an argument and returns a mutable ref object with a
        .current property. The useRef hook is useful for accessing DOM elements,
        managing focus, and storing values that do not trigger re-renders.
      </p>

      <h3>What is the purpose of the useLayoutEffect hook in React?</h3>
      <p>
        The useLayoutEffect hook in React is similar to the useEffect hook, but
        is called synchronously after the DOM has been updated. This means that
        any changes made in the useLayoutEffect hook will be applied before the
        browser updates the screen. The useLayoutEffect hook is useful for tasks
        that require access to the DOM, such as measuring the dimensions of an
        element or updating the scroll position of a list.
      </p>

      <h3>What is the purpose of the useImperativeHandle hook in React?</h3>
      <p>
        The useImperativeHandle hook in React is used to customize the instance
        value that is exposed when using React.forwardRef. The
        useImperativeHandle hook takes a ref object and a function as arguments,
        and allows the parent component to specify which properties and methods
        of the child component should be exposed to the parent component.
      </p>

      <h3>What is the purpose of the useDebugValue hook in React?</h3>

      <p>
        The useDebugValue hook in React is used to display a label for custom
        hooks in React DevTools. The useDebugValue hook takes a value and a
        formatter function as arguments, and allows developers to provide
        additional information about custom hooks that is displayed in the React
        DevTools.
      </p>

      <h3>What is the purpose of the useReducer hook in React?</h3>
      <p>
        The useReducer hook in React is used to manage complex state logic in
        functional components. The useReducer hook takes a reducer function and
        an initial state as arguments, and returns the current state and a
        dispatch function. The useReducer hook is similar to the useState hook,
        but is more suitable for managing state that involves multiple
        sub-values or complex state transitions.
      </p>

      <h3>What is the purpose of the useImperativeHandle hook in React?</h3>
      <p>
        The useImperativeHandle hook in React is used to customize the instance
        value that is exposed when using React.forwardRef. The
        useImperativeHandle hook takes a ref object and a function as arguments,
        and allows the parent component to specify which properties and methods
        of the child component should be exposed to the parent component.
      </p>

      <h3>What is the purpose of the useLayoutEffect hook in React?</h3>
      <p>
        The useLayoutEffect hook in React is similar to the useEffect hook, but
        is called synchronously after the DOM has been updated. This means that
        any changes made in the useLayoutEffect hook will be applied before the
        browser updates the screen. The useLayoutEffect hook is useful for tasks
        that require access to the DOM, such as measuring the dimensions of an
        element or updating the scroll position of a list.
      </p>

      <h3>What is the purpose of the useDebugValue hook in React?</h3>

      <p>
        The useDebugValue hook in React is used to display a label for custom
        hooks in React DevTools. The useDebugValue hook takes a value and a
        formatter function as arguments, and allows developers to provide
        additional information about custom hooks that is displayed in the React
        DevTools.
      </p>

      <h3>What is the purpose of the useReducer hook in React?</h3>
      <p>
        The useReducer hook in React is used to manage complex state logic in
        functional components. The useReducer hook takes a reducer function and
        an initial state as arguments, and returns the current state and a
        dispatch function. The useReducer hook is similar to the useState hook,
        but is more suitable for managing state that involves multiple
        sub-values or complex state transitions.
      </p>

      <h3>What is the purpose of the useImperativeHandle hook in React?</h3>
      <p>
        The useImperativeHandle hook in React is used to customize the instance
        value that is exposed when using React.forwardRef. The
        useImperativeHandle hook takes a ref object and a function as arguments,
        and allows the parent component to specify which properties and methods
        of the child component should be exposed to the parent component.
      </p>

      <h3>What is the purpose of the useLayoutEffect hook in React?</h3>
      <p>
        The useLayoutEffect hook in React is similar to the useEffect hook, but
        is called synchronously after the DOM has been updated. This means that
        any changes made in the useLayoutEffect hook will be applied before the
        browser updates the screen. The useLayoutEffect hook is useful for tasks
        that require access to the DOM, such as measuring the dimensions of an
        element or updating the scroll position of a list.
      </p>

      <h3>What is the purpose of the useDebugValue hook in React?</h3>
      <p>
        The useDebugValue hook in React is used to display a label for custom
        hooks in React DevTools. The useDebugValue hook takes a value and a
        formatter function as arguments, and allows developers to provide
        additional information about custom hooks that is displayed in the React
        DevTools.
      </p>

      <h3>What are custom hooks in React?</h3>

      <p>
        Custom hooks are JavaScript functions that allow you to reuse logic
        across multiple components. They are a way to extract and share common
        logic between components without repeating code. Custom hooks follow the
        naming convention useSomething, where Something is a descriptive name
        for the logic being shared. Custom hooks can use other hooks, including
        built-in hooks and other custom hooks. Custom hooks can accept arguments
        to customize their behavior. Custom hooks can return values to be used
        in the component. Custom hooks can be shared and reused across different
        components. Custom hooks can be tested like regular functions. Custom
        hooks can be used to encapsulate complex logic and make components more
        readable and maintainable.
      </p>

      <h3>
        What are the key differences between class components and functional
        components in React?
      </h3>
      <p>
        Class components and functional components are two types of components
        in React. Class components are ES6 classes that extend the
        React.Component class, while functional components are JavaScript
        functions that return JSX. Some key differences between class components
        and functional components are:
      </p>

      <ul>
        <li>
          State Management: Class components have their own state object, while
          functional components use hooks like useState to manage state.
        </li>
        <li>
          Lifecycle Methods: Class components have lifecycle methods like
          componentDidMount and componentDidUpdate, while functional components
          use hooks like useEffect.
        </li>
        <li>
          Code Structure: Class components use the render method to return JSX,
          while functional components return JSX directly.
        </li>
        <li>
          Performance: Functional components are generally faster and more
          lightweight than class components.
        </li>
        <li>
          Readability: Functional components are often easier to read and
          understand than class components.
        </li>
        <li>
          Reusability: Functional components are more reusable and easier to
          test than class components.
        </li>
        <li>
          Complexity: Functional components are simpler and less complex than
          class components.
        </li>
        <li>
          State Management: Class components have their own state object, while
          functional components use hooks like useState to manage state.
        </li>
        <li>
          Lifecycle Methods: Class components have lifecycle methods like
          componentDidMount and componentDidUpdate, while functional components
          use hooks like useEffect.
        </li>
        <li>
          Code Structure: Class components use the render method to return JSX,
          while functional components return JSX directly.
        </li>
        <li>
          Performance: Functional components are generally faster and more
          lightweight than class components.
        </li>
        <li>
          Readability: Functional components are often easier to read and
          understand than class components.
        </li>
        <li>
          Reusability: Functional components are more reusable and easier to
          test than class components.
        </li>
        <li>
          Complexity: Functional components are simpler and less complex than
          class components.
        </li>
      </ul>

      <h3>
        What are the key differences between controlled and uncontrolled
        components in React?
      </h3>
      <p>
        Controlled components and uncontrolled components are two ways to manage
        form data in React. Some key differences between controlled and
        uncontrolled components are:
      </p>
      <ul>
        <li>
          State Management: Controlled components store form data in the
          component state, while uncontrolled components store form data in the
          DOM.
        </li>
        <li>
          Event Handling: Controlled components use event handlers to update the
          component state, while uncontrolled components use refs to access form
          data.
        </li>
        <li>
          Validation: Controlled components can validate form data before
          submission, while uncontrolled components do not have built-in
          validation.
        </li>
        <li>
          Performance: Controlled components are generally slower and less
          performant than uncontrolled components.
        </li>
        <li>
          Complexity: Controlled components are more complex to implement and
          manage than uncontrolled components.
        </li>
        <li>
          State Management: Controlled components store form data in the
          component state, while uncontrolled components store form data in the
          DOM.
        </li>
        <li>
          Event Handling: Controlled components use event handlers to update the
          component state, while uncontrolled components use refs to access form
          data.
        </li>
        <li>
          Validation: Controlled components can validate form data before
          submission, while uncontrolled components do not have built-in
          validation.
        </li>
        <li>
          Performance: Controlled components are generally slower and less
          performant than uncontrolled components.
        </li>
        <li>
          Complexity: Controlled components are more complex to implement and
          manage than uncontrolled components.
        </li>
      </ul>

      <h3>What are the key differences between React and Angular?</h3>
      <p>
        React and Angular are two popular JavaScript frameworks for building web
        applications. Some key differences between React and Angular are:
      </p>
      <ul>
        <li>
          Language: React is a JavaScript library, while Angular is a
          full-fledged framework.
        </li>
        <li>
          Architecture: React uses a component-based architecture, while Angular
          uses a module-based architecture.
        </li>
        <li>
          Rendering: React uses a virtual DOM to improve performance, while
          Angular uses a real DOM.
        </li>
        <li>
          Learning Curve: React has a lower learning curve than Angular, as it
          is simpler and more lightweight.
        </li>
        <li>
          Community: React has a larger and more active community than Angular,
          with more resources and libraries available.
        </li>
        <li>
          Flexibility: React is more flexible and allows developers to choose
          their own tools and libraries, while Angular has a more opinionated
          approach.
        </li>
        <li>
          Language: React is a JavaScript library, while Angular is a
          full-fledged framework.
        </li>
        <li>
          Architecture: React uses a component-based architecture, while Angular
          uses a module-based architecture.
        </li>
        <li>
          Rendering: React uses a virtual DOM to improve performance, while
          Angular uses a real DOM.
        </li>
        <li>
          Learning Curve: React has a lower learning curve than Angular, as it
          is simpler and more lightweight.
        </li>
        <li>
          Community: React has a larger and more active community than Angular,
          with more resources and libraries available.
        </li>
        <li>
          Flexibility: React is more flexible and allows developers to choose
          their own tools and libraries, while Angular has a more opinionated
          approach.
        </li>
      </ul>

      <h3>What are the key differences between React and Vue?</h3>
      <p>
        React and Vue are two popular JavaScript frameworks for building web
        applications. Some key differences between React and Vue are:
      </p>

      <ul>
        <li>
          Language: React is a JavaScript library, while Vue is a full-fledged
          framework.
        </li>
        <li>
          Architecture: React uses a component-based architecture, while Vue
          uses a component-based architecture with a focus on reactivity.
        </li>
        <li>
          Rendering: React uses a virtual DOM to improve performance, while Vue
          uses a virtual DOM with a reactivity system.
        </li>
        <li>
          Learning Curve: React has a lower learning curve than Vue, as it is
          simpler and more lightweight.
        </li>
        <li>
          Community: React has a larger and more active community than Vue, with
          more resources and libraries available.
        </li>
        <li>
          Flexibility: React is more flexible and allows developers to choose
          their own tools and libraries, while Vue has a more opinionated
          approach.
        </li>
        <li>
          Language: React is a JavaScript library, while Vue is a full-fledged
          framework.
        </li>
        <li>
          Architecture: React uses a component-based architecture, while Vue
          uses a component-based architecture with a focus on reactivity.
        </li>
        <li>
          Rendering: React uses a virtual DOM to improve performance, while Vue
          uses a virtual DOM with a reactivity system.
        </li>
        <li>
          Learning Curve: React has a lower learning curve than Vue, as it is
          simpler and more lightweight.
        </li>
        <li>
          Community: React has a larger and more active community than Vue, with
          more resources and libraries available.
        </li>
        <li>
          Flexibility: React is more flexible and allows developers to choose
          their own tools and libraries, while Vue has a more opinionated
          approach.
        </li>
      </ul>

      <h3>What are the key differences between React and Svelte?</h3>
      <p>
        React and Svelte are two popular JavaScript frameworks for building web
        applications. Some key differences between React and Svelte are:
      </p>
      <ul>
        <li>
          Language: React is a JavaScript library, while Svelte is a
          full-fledged framework.
        </li>
        <li>
          Architecture: React uses a component-based architecture, while Svelte
          uses a compiler-based architecture.
        </li>
        <li>
          Rendering: React uses a virtual DOM to improve performance, while
          Svelte compiles components to highly optimized vanilla JavaScript.
        </li>
        <li>
          Learning Curve: React has a lower learning curve than Svelte, as it is
          simpler and more lightweight.
        </li>
        <li>
          Community: React has a larger and more active community than Svelte,
          with more resources and libraries available.
        </li>
        <li>
          Flexibility: React is more flexible and allows developers to choose
          their own tools and libraries, while Svelte has a more opinionated
          approach.
        </li>
        <li>
          Language: React is a JavaScript library, while Svelte is a
          full-fledged framework.
        </li>
        <li>
          Architecture: React uses a component-based architecture, while Svelte
          uses a compiler-based architecture.
        </li>
        <li>
          Rendering: React uses a virtual DOM to improve performance, while
          Svelte compiles components to highly optimized vanilla JavaScript.
        </li>
        <li>
          Learning Curve: React has a lower learning curve than Svelte, as it is
          simpler and more lightweight.
        </li>
        <li>
          Community: React has a larger and more active community than Svelte,
          with more resources and libraries available.
        </li>
        <li>
          Flexibility: React is more flexible and allows developers to choose
          their own tools and libraries, while Svelte has a more opinionated
          approach.
        </li>
      </ul>

      <h3>what is axios in react?</h3>
      <p>
        Axios is a popular JavaScript library that allows developers to make
        HTTP requests from the browser. Axios is commonly used in React
        applications to fetch data from APIs and update the state of the
        application. Axios provides a simple and easy-to-use API for making HTTP
        requests, handling errors, and managing response data. Axios can be used
        with both class components and functional components in React.
      </p>

      <h3>What is Redux in React?</h3>
      <p>
        Redux is a popular state management library for React applications.
        Redux allows developers to manage the state of the application in a
        predictable and centralized way. Redux uses a single store to hold the
        state of the application, and provides a set of functions to update and
        access the state. Redux is commonly used in large React applications to
        manage complex state logic and data flow. Redux can be used with both
        class components and functional components in React.
      </p>

      <h3>What is React Router in React?</h3>
      <p>
        React Router is a popular routing library for React applications. React
        Router allows developers to define routes in the application and render
        different components based on the URL. React Router provides a simple
        and declarative API for defining routes, handling navigation, and
        passing parameters to components. React Router is commonly used in React
        applications to create multi-page applications with multiple views and
        navigation.
      </p>

      <h3>What is React Context in React?</h3>
      <p>
        React Context is a feature in React that allows developers to pass data
        through the component tree without having to pass props down manually at
        every level. React Context provides a way to share data between
        components without using props, making it easier to manage state and
        configuration across the application. React Context is commonly used in
        large React applications to provide global data and settings to
        components deep in the component tree.
      </p>

      <h3>What is React Fiber in React?</h3>

      <p>
        React Fiber is a complete rewrite of the React core algorithm. React
        Fiber is designed to improve the performance and responsiveness of React
        applications by introducing a new reconciliation algorithm and rendering
        pipeline. React Fiber allows React to break up the rendering work into
        smaller chunks, prioritize updates, and pause and resume work as needed.
        React Fiber is an internal implementation detail of React and is not
        directly exposed to developers, but it provides the foundation for
        features like concurrent mode and suspense in React.
      </p>

      <h3>
        What are the key features of React Fiber and how do they improve
        performance?
      </h3>

      <p>
        React Fiber is a complete rewrite of the React core algorithm. React
        Fiber is designed to improve the performance and responsiveness of React
        applications by introducing a new reconciliation algorithm and rendering
        pipeline. React Fiber allows React to break up the rendering work into
        smaller chunks, prioritize updates, and pause and resume work as needed.
        React Fiber is an internal implementation detail of React and is not
        directly exposed to developers, but it provides the foundation for
        features like concurrent mode and suspense in React.
      </p>

      <h3>examples of React Fiber features that improve performance are:</h3>

      <ul>
        <li>
          Concurrent Mode: React Fiber introduces concurrent mode, which allows
          React to work on multiple tasks simultaneously, making the application
          more responsive and interactive.
        </li>
        <li>
          Suspense: React Fiber introduces suspense, which allows components to
          suspend rendering while waiting for data to load, improving the user
          experience and reducing loading times.
        </li>
        <li>
          Prioritization: React Fiber allows React to prioritize updates based
          on their importance, ensuring that critical updates are processed
          first and improving the perceived performance of the application.
        </li>
        <li>
          Incremental Rendering: React Fiber allows React to render components
          incrementally, updating the screen as work is completed, rather than
          waiting for the entire tree to be rendered, improving the perceived
          performance of the application.
        </li>
        <li>
          Optimized Reconciliation: React Fiber introduces a new reconciliation
          algorithm that is more efficient and performant, reducing the time it
          takes to update the DOM and improving the overall performance of the
          application.
        </li>
      </ul>

      <h3>what is reconciliation in React?</h3>
      <p>
        Reconciliation is the process of updating the DOM to reflect changes in
        the state of a React component. When a component's state or props
        change, React compares the new state or props with the previous state or
        props and determines what changes need to be made to the DOM to reflect
        the new state. React then updates the DOM to apply these changes,
        ensuring that the user interface is always up-to-date and responsive.
      </p>

      <h3>
        what is HOC in React and how do you create a higher-order component?
      </h3>
      <p>
        A higher-order component (HOC) is a function that takes a component and
        returns a new component with additional functionality. HOCs are a
        pattern in React that allows developers to reuse logic and behavior
        across multiple components. To create a higher-order component in React,
        you can define a function that takes a component as an argument and
        returns a new component that wraps the original component with the
        desired functionality. The new component can then be used like any other
        component in the application, with the added functionality provided by
        the HOC.
      </p>
      <h3>What is the use of refs?</h3>

      <p>
        Refs provide a way to access DOM nodes or React elements created in the
        render method. Refs are commonly used to focus input fields, trigger
        animations, or integrate with third-party libraries that require direct
        access to DOM elements. Refs are created using the useRef hook in
        functional components or the createRef method in class components. Refs
        are mutable and can be updated directly, but should be used sparingly to
        avoid breaking the declarative nature of React components.
      </p>

      <h3>What is the use of keys in React?</h3>
      <p>
        Keys are used in React to identify and track elements in a list. Keys
        are a special attribute that should be provided to elements in a list to
        help React identify which items have changed, been added, or been
        removed. Keys should be unique within the list and should not change
        over time. Keys are important for performance and efficiency in React
        applications, as they help React optimize the rendering process and
        avoid unnecessary re-renders of elements in a list.
      </p>

      <h3>What happen if you don't use keys in React?</h3>

      <p>
        If you don't use keys in React, React will use the index of the element
        in the list as the key by default. While this may work in some cases,
        using the index as the key can lead to performance issues and bugs in
        certain situations. When the order of the list changes, React may
        mistakenly identify elements as changed, added, or removed based on the
        index, leading to incorrect rendering and behavior. To avoid these
        issues, it is recommended to provide unique keys to elements in a list
        to help React accurately track and update the list.
      </p>
    </div>
  );
};

export default ReactInterviewQuestion;
