import React from "react";

const UseRefHooks = () => {
  return (
    <div>
      <div style={{ padding: " 20px" }}>
        <h1>useRef Hooks</h1>
        <p>
          useRef returns a mutable ref object whose .current property is
          initialized to the passed argument (initialValue). The returned object
          will persist for the full lifetime of the component.
        </p>
        <h2>Example</h2>
        <p>
          In the example below, we have a button that when clicked, focuses on
          the input field. This is achieved by using the useRef hook.
        </p>
        <pre>
          {`
            import React, { useRef } from "react";

            const UseRefHooks = () => {
            const inputRef = useRef(null);

            const handleClick = () => {
                inputRef.current.focus();
            }

            return (
                <div>
                <input ref={inputRef} type="text" />
                <button onClick={handleClick}>Focus Input</button>
                </div>
            );
            }

            export default UseRefHooks;
            `}
        </pre>

        <h2>What are the rules of useRef?</h2>
        <p>
          useRef can be used to store mutable values that are persisted for the
          full lifetime of the component. The .current property of the ref
          object can be used to access the current value of the ref.
        </p>

        <h2>What are the advantages of useRef?</h2>
        <p>
          useRef can be used to store mutable values that are persisted for the
          full lifetime of the component. This can be useful for storing
          references to DOM elements, managing focus, and other use cases where
          you need to store mutable values across renders.
        </p>
      </div>
    </div>
  );
};

export default UseRefHooks;
