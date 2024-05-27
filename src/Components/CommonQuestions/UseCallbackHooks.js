import React from "react";

const UseCallbackHooks = () => {
  return (
    <div>
      <div style={{ padding: " 20px" }}>
        <h1>useCallback Hooks</h1>
        <p>
          useCallback is a hook that returns a memoized version of the callback
          function that only changes if one of the dependencies has changed. It
          is useful when passing callbacks to optimized child components that
          rely on reference equality to prevent unnecessary renders.
        </p>
        <h2>What is the purpose of useCallback?</h2>
        <p>
          The purpose of useCallback is to optimize performance by memoizing
          functions so that they are not recreated on every render. This can
          help prevent unnecessary re-renders in child components that rely on
          reference equality to determine if they should update.
        </p>
        <h2>How does useCallback work?</h2>
        <p>
          useCallback takes a callback function and an array of dependencies as
          arguments. The callback function is memoized and will only be
          recreated if one of the dependencies has changed. This can help
          prevent unnecessary re-renders in child components that rely on
          reference equality to determine if they should update.
        </p>

        <h2>Example:</h2>
        <p>
          <pre>
            {`
            const memoizedCallback = useCallback(() => {
              doSomething(a, b);
            }, [a, b]);
            `}
          </pre>
        </p>
      </div>
    </div>
  );
};

export default UseCallbackHooks;
