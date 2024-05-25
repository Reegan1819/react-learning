import React, { useEffect } from "react";

const UseMemoHooks = () => {

    useEffect(() => {
        document.title = "useMemo Hooks";
        window.scrollTo(0, 0);
    }, [])
    
  return (
    <div>
      <h1>useMemo Hooks</h1>
      <p>
        useMemo is a hook that is used for memoization in React. It is used to
        optimize performance by memoizing the result of a function. It is used
        to prevent unnecessary re-renders of a component by caching the result
        of a function and returning the cached result when the function is
        called with the same arguments.
      </p>
      <h2>What is the purpose of useMemo?</h2>
      <p>
        The purpose of useMemo is to optimize performance by memoizing the
        result of a function so that it is not recalculated on every render.
        This can help prevent unnecessary re-renders of a component and improve
        the performance of your application.
      </p>
      <h2>How does useMemo work?</h2>
      <p>
        useMemo takes a function and an array of dependencies as arguments. The
        function is memoized and will only be recalculated if one of the
        dependencies has changed. This can help prevent unnecessary re-renders
        of a component by caching the result of the function and returning the
        cached result when the function is called with the same arguments.
      </p>
      <h2>Example:</h2>
      <p>
        <pre>
          {`
                const memoizedValue = useMemo(() => {
                    return computeExpensiveValue(a, b);
                }, [a, b]);
                `}
        </pre>
      </p>
    </div>
  );
};

export default UseMemoHooks;
