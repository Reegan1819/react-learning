import React from "react";

const useLayoutEffectHooks = () => {
  return (
    <div style={{ padding: " 20px" }}>
      <h1>useLayoutEffect</h1>
      <p>
        The useLayoutEffect hook is similar to the useEffect hook, but it fires
        synchronously after all DOM mutations. This can be useful if you need to
        read layout from the DOM and then make changes based on that layout.
      </p>
      <h2>What is the purpose of useLayoutEffect?</h2>
      <p>
        The purpose of useLayoutEffect is to allow you to read layout from the
        DOM and then make changes based on that layout. This can be useful if
        you need to measure an element's size or position and then update the
        DOM based on that information.
      </p>
      <h2>How does useLayoutEffect work?</h2>
      <p>
        useLayoutEffect takes a function and an array of dependencies as
        arguments. The function will be called after all DOM mutations, and the
        dependencies array will determine when the effect should run. If the
        dependencies array is empty, the effect will run after every render. If
        the dependencies array contains values, the effect will run only when
        those values change.
      </p>
    </div>
  );
};

export default useLayoutEffectHooks;
