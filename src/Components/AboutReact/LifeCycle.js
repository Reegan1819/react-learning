import React from "react";

const LifeCycle = () => {
  return (
    <div>
      <h2>Lifecycle Methods</h2>
      <p>
        Lifecycle methods are methods that get called at different stages of a
        component's life cycle. The three main stages are:
      </p>
      <ul>
        <li>Mounting</li>
        <li>Updating</li>
        <li>Unmounting</li>
      </ul>
      <p>
        In the mounting stage, the component is being created and inserted into
        the DOM. The main lifecycle methods that get called during this stage
        are:
      </p>
      <ul>
        <li>constructor()</li>
        <li>static getDerivedStateFromProps()</li>
        <li>render()</li>
        <li>componentDidMount()</li>
      </ul>
      <p>
        In the updating stage, the component is being re-rendered due to changes
        in props or state. The main lifecycle methods that get called during
        this stage are:
      </p>
      <ul>
        <li>static getDerivedStateFromProps()</li>
        <li>shouldComponentUpdate()</li>
        <li>render()</li>
        <li>getSnapshotBeforeUpdate()</li>
        <li>componentDidUpdate()</li>
      </ul>
      <p>
        In the unmounting stage, the component is being removed from the DOM.
        The main lifecycle method that gets called during this stage is:
      </p>
      <ul>
        <li>componentWillUnmount()</li>
      </ul>
      <p>
        In addition to these main lifecycle methods, there are other methods
        that can be used to perform side effects in function components. These
        methods are:
      </p>
      <ul>
        <li>useEffect()</li>
        <li>useLayoutEffect()</li>
        <li>useContext()</li>
        <li>useReducer()</li>
      </ul>
      <h2>Which lifecycle method is called only once in React?</h2>
      <p>
        The <code>componentDidMount()</code> method is called only once after
        the component is rendered for the first time. It is used to perform
        initialization tasks, such as setting up event listeners or fetching
        data from an API.
      </p>
      <p>
        React has only one built-in method that gets called when a component is
        unmounted: componentWillUnmount(). This method is called just before the
        component is removed from the DOM. It is used to perform cleanup tasks,
        such as removing event listeners or canceling API requests.
      </p>

      <h2>What is the purpose of the getSnapshotBeforeUpdate method?</h2>
      <p>
        The getSnapshotBeforeUpdate method is a lifecycle method that gets
        called just before the changes from the current render are committed to
        the DOM. It allows you to capture some information from the DOM before
        it is potentially changed. This method is useful for tasks such as
        saving the scroll position of a list or capturing the dimensions of an
        element before it is resized. The getSnapshotBeforeUpdate method takes
        two arguments: prevProps and prevState, which represent the previous
        props and state of the component. It returns a value that is passed to
        the componentDidUpdate method as the third argument.
      </p>

      <h2>
        Explain functional components and class components lifecycle method in
        React. What are the differences between them?
      </h2>

      <p>
        Functional components and class components are two types of components
        in React that have different lifecycle methods. Functional components
        are simpler and more lightweight than class components, as they are just
        JavaScript functions that return JSX. Functional components do not have
        their own lifecycle methods, but they can use React hooks to perform
        side effects and manage state. The main hooks used for side effects in
        functional components are useEffect and useLayoutEffect. useEffect is
        called after the component is rendered, while useLayoutEffect is called
        before the browser updates the screen. Functional components can also
        use the useContext hook to access context in the component tree.
      </p>

      <p>
        Class components, on the other hand, have their own lifecycle methods
        that get called at different stages of the component's life cycle. The
        main lifecycle methods in class components are:
      </p>
      <ul>
        <li>componentDidMount()</li>
        <li>componentDidUpdate()</li>
        <li>componentWillUnmount()</li>
      </ul>
      <p>
        The componentDidMount method is called after the component is rendered
        for the first time, and is used to perform initialization tasks. The
        componentDidUpdate method is called after the component is updated, and
        is used to perform side effects based on changes in props or state. The
        componentWillUnmount method is called just before the component is
        removed from the DOM, and is used to perform cleanup tasks. The main
        difference between functional components and class components is that
        class components have their own lifecycle methods, while functional
        components use hooks to perform side effects and manage state.
        Functional components are simpler and more lightweight than class
        components, and are the preferred way to write components in React.
      </p>

      <h2>What is the purpose of the useEffect hook in React?</h2>
      <p>
        The useEffect hook in React is used to perform side effects in
        functional components. Side effects are operations that affect the
        outside world, such as fetching data from an API, setting up
        subscriptions, or updating the DOM. The useEffect hook is called after
        the component is rendered, and is used to perform side effects based on
        changes in props or state. The useEffect hook takes two arguments: a
        callback function that contains the side effect, and an optional array
        of dependencies. The callback function is called after the component is
        rendered, and is used to perform the side effect. The array of
        dependencies is used to specify which values the side effect depends on.
        If the array of dependencies is empty, the side effect is only run once
        after the initial render. If the array of dependencies contains values,
        the side effect is run whenever one of the values changes. The useEffect
        hook can also return a cleanup function, which is called before the
        component is removed from the DOM. This is used to clean up any
        resources used by the side effect, such as removing event listeners or
        canceling API requests.
      </p>

      <h2>What is the purpose of the useLayoutEffect hook in React?</h2>

      <p>
        The useLayoutEffect hook in React is similar to the useEffect hook, but
        it is called synchronously after the DOM has been updated. This means
        that any changes made in the useLayoutEffect hook will be applied before
        the browser updates the screen. The useLayoutEffect hook is useful for
        tasks that require access to the DOM, such as measuring the dimensions
        of an element or updating the scroll position of a list. The
        useLayoutEffect hook takes two arguments: a callback function that
        contains the side effect, and an optional array of dependencies. The
        callback function is called after the component is rendered, and is used
        to perform the side effect. The array of dependencies is used to specify
        which values the side effect depends on. If the array of dependencies is
        empty, the side effect is only run once after the initial render. If the
        array of dependencies contains values, the side effect is run whenever
        one of the values changes. The useLayoutEffect hook can also return a
        cleanup function, which is called before the component is removed from
        the DOM. This is used to clean up any resources used by the side effect,
        such as removing event listeners or canceling API requests.
      </p>

      <h2>What is the purpose of the useContext hook in React?</h2>
      <p>
        The useContext hook in React is used to access context in functional
        components. Context provides a way to pass data through the component
        tree without having to pass props down manually at every level. The
        useContext hook takes a context object as an argument and returns the
        current value of that context. The useContext hook is a close
        replacement for the static contextType property in class components, and
        the Context.Consumer component in functional components. The useContext
        hook is useful for accessing global data, such as the current user,
        theme, or language, without having to pass props down through multiple
        levels of the component tree. The useContext hook can be used in
        combination with the createContext and Provider components to create and
        consume context in React applications.
      </p>
    </div>
  );
};

export default LifeCycle;
