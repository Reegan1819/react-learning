import React from "react";

const useDebugValueHooks = () => {
  return (
    <div style={{ padding: " 20px" }}>
      <h1>useDebugValue</h1>
      <p>
        The useDebugValue hook is used to display a label for custom hooks in
        the React DevTools. This can be useful for debugging and understanding
        custom hooks when inspecting them in the DevTools.
      </p>
      <h2>What is the purpose of useDebugValue?</h2>
      <p>
        The purpose of useDebugValue is to display a label for custom hooks in
        the React DevTools. This can be useful for debugging and understanding
        custom hooks when inspecting them in the DevTools.
      </p>
      <h2>How does useDebugValue work?</h2>
      <p>
        useDebugValue takes a value and a formatter function as arguments. The
        formatter function will be called with the value and should return a
        formatted label that will be displayed in the React DevTools. This can
        be used to provide additional information about custom hooks when
        inspecting them in the DevTools.
      </p>
    </div>
  );
};

export default useDebugValueHooks;
