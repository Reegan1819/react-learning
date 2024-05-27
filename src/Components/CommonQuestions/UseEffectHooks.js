import React from "react";

const UseEffectHooks = () => {
  return (
    <div>
      <div style={{ padding: " 20px" }}>
        <h1>useEffect Hooks</h1>
        <p>
          useEffect is a Hook that allows you to perform side effects in
          functional components. It is similar to componentDidMount,
          componentDidUpdate, and componentWillUnmount in class components.
        </p>
        <h2>What are the rules of useEffect?</h2>
        <p>useEffect runs after every render of the component.</p>
        <h2>What are the advantages of useEffect?</h2>
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
        <h2>How to use useEffect?</h2>
        <p>
          useEffect takes two arguments: a function that contains the side
          effect and an optional array of dependencies. The function is called
          after the component is rendered and the dependencies are updated.
        </p>
        <h2>
          What are the advantages of using useEffect over class lifecycle
          methods?
        </h2>

        <p>
          useEffect is easier to read and write than class lifecycle methods. It
          also allows you to separate side effects from the rest of your
          component logic, which can make your code easier to maintain.
        </p>
        <h2>
          explain lifecycle method in class component and useEffect in
          functional component
        </h2>
        <p>
          In class components, you can use lifecycle methods like
          componentDidMount, componentDidUpdate, and componentWillUnmount to
          perform side effects. In functional components, you can use the
          useEffect Hook to achieve the same result. useEffect runs after every
          render of the component, so you can use it to perform side effects
          like data fetching, subscriptions, or DOM manipulations.
        </p>

        <h2>What are the common use cases of useEffect?</h2>
        <ul>
          <li>Data fetching</li>
          <li>Subscriptions</li>
          <li>DOM manipulations</li>
          <li>Logging</li>
          <li>Performance optimizations</li>
        </ul>

        <h2>What are the dependencies in useEffect?</h2>
        <p>
          The dependencies in useEffect are an optional array of values that the
          effect depends on. If any of the dependencies change, the effect will
          be re-run. If you don’t provide any dependencies, the effect will run
          after every render of the component.
        </p>

        <h2>What is the cleanup function in useEffect?</h2>
        <p>
          The cleanup function in useEffect is a function that is called when
          the component is unmounted or before the effect is re-run. You can use
          the cleanup function to clean up any resources or subscriptions that
          the effect created.
        </p>

        <h2>What is the return value of useEffect?</h2>
        <p>
          The return value of useEffect is a cleanup function that is called
          when the component is unmounted or before the effect is re-run. You
          can use the cleanup function to clean up any resources or
          subscriptions that the effect created.
        </p>

        <h2>What are the common mistakes to avoid when using useEffect?</h2>

        <ul>
          <li>Not providing dependencies</li>
          <li>Not cleaning up resources</li>
          <li>Not handling async effects</li>
          <li>Not handling errors</li>
          <li>Not using the cleanup function</li>
          <li>Not using the dependencies array correctly</li>
          <li>Not using useEffect for side effects</li>
          <li>Not using useEffect for data fetching</li>
          <li>Not using useEffect for subscriptions</li>
          <li>Not using useEffect for DOM manipulations</li>
          <li>Not using useEffect for logging</li>
          <li>Not using useEffect for performance optimizations</li>
          <li>Not using useEffect for code organization</li>
          <li>Not using useEffect for code readability</li>
          <li>Not using useEffect for code maintainability</li>
          <li>Not using useEffect for code reusability</li>
          <li>Not using useEffect for code consistency</li>
          <li>Not using useEffect for code performance</li>
          <li>Not using useEffect for code quality</li>
          <li>Not using useEffect for code scalability</li>
          <li>Not using useEffect for code simplicity</li>
          <li>Not using useEffect for code consistency</li>
        </ul>

        <h2>What are the best practices for using useEffect?</h2>

        <ul>
          <li>Always provide dependencies</li>
          <li>Always clean up resources</li>
          <li>Always handle async effects</li>
          <li>Always handle errors</li>
          <li>Always use the cleanup function</li>
          <li>Always use the dependencies array correctly</li>
          <li>Always use useEffect for side effects</li>
          <li>Always use useEffect for data fetching</li>
          <li>Always use useEffect for subscriptions</li>
          <li>Always use useEffect for DOM manipulations</li>
          <li>Always use useEffect for logging</li>
          <li>Always use useEffect for performance optimizations</li>
          <li>Always use useEffect for code organization</li>
          <li>Always use useEffect for code readability</li>
          <li>Always use useEffect for code maintainability</li>
          <li>Always use useEffect for code reusability</li>
          <li>Always use useEffect for code consistency</li>
          <li>Always use useEffect for code performance</li>
          <li>Always use useEffect for code quality</li>
          <li>Always use useEffect for code scalability</li>
          <li>Always use useEffect for code simplicity</li>
          <li>Always use useEffect for code consistency</li>
        </ul>

        <h2>What happened if you don't provide dependencies in useEffect?</h2>

        <p>
          If you don’t provide any dependencies, the effect will run after every
          render of the component.
        </p>
        <h2>
          Explain lifecycle method in functional component and useEffect in
          functional component
        </h2>
        <p>
          In functional components, you can use the useEffect Hook to perform
          side effects. useEffect runs after every render of the component, so
          you can use it to perform side effects like data fetching,
          subscriptions, or DOM manipulations. You can also use the useEffect
          Hook to clean up any resources or subscriptions that the effect
          created.
        </p>
        <h2>
          Example of useEffect performs componentDidMount, componentDidUpdate,
          and componentWillUnmount in functional component with definition
        </h2>
        <p>
          <pre>
            {`
            import React, { useEffect, useState } from 'react';

            const ExampleComponent = () => {
                const [count, setCount] = useState(0);

                useEffect(() => {
                    console.log('componentDidMount');
                    return () => {
                        console.log('componentWillUnmount');
                    };
                }, []);

                useEffect(() => {
                    console.log('componentDidUpdate');
                }, [count]);

                return (
                    <div>
                        <h1>{count}</h1>
                        <button onClick={() => setCount(count + 1)}>Increment</button>
                    </div>
                );
            }

            export default ExampleComponent;
            `}
          </pre>
        </p>
      </div>
    </div>
  );
};

export default UseEffectHooks;
