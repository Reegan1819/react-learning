import React from "react";

const StateProps = () => {
  return (
    <div style={{ padding: " 20px" }}>
      <h1>State and Props</h1>
      <p>
        State and props are the two types of data that control a component in
        React.
      </p>
      <h2>State</h2>
      <p>
        State is a built-in React object that allows components to hold and
        manage their own data. The state object can be updated by calling the
        setState() method.
      </p>
      <h2>Props</h2>

      <p>
        Props are short for properties and are used to pass data from one
        component to another. They are read-only and help you maintain the flow
        of data from parent to child components.
      </p>
    </div>
  );
};

export default StateProps;
