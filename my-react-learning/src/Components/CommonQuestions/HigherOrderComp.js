import React from "react";

const HigherOrderComp = () => {
  return (
    <div style={{ padding: " 20px" }}>
      <h1>Higher Order Components</h1>
      <p>
        A higher-order component (HOC) is an advanced technique in React for
        reusing component logic. HOCs are not part of the React API, per se.
        They are a pattern that emerges from React’s compositional nature.
      </p>
      <p>
        A higher-order component acts as a container for other components. This
        helps to keep components simple and enables re-usability. They are
        generally used when multiple components have to use a common logic
      </p>

      <p>
        <strong>Example:</strong>
        <pre>
          {`
            import React from 'react';

            const UpdatedComponent = (OriginalComponent) => {
              class NewComponent extends React.Component {
                render() {
                  return <OriginalComponent />;
                }
              }
              return NewComponent;
            };

            export default UpdatedComponent;
          `}
        </pre>
      </p>
      <p>
        In the above example, UpdatedComponent is a higher-order component that
        takes OriginalComponent as an argument and returns a new component
        called NewComponent. The NewComponent renders the OriginalComponent.
      </p>
      <p>
        The higher-order component can also accept additional props and pass
        them to the OriginalComponent.
      </p>
      <p>
        <strong>Example:</strong>
        <pre>
          {`
            import React from 'react';

            const UpdatedComponent = (OriginalComponent) => {
              class NewComponent extends React.Component {
                render() {
                  return <OriginalComponent name="John" />;
                }
              }
              return NewComponent;
            };

            export default UpdatedComponent;
          `}
        </pre>
      </p>
      <p>
        In the above example, the UpdatedComponent passes the name prop to the
        OriginalComponent.
      </p>
    </div>
  );
};

export default HigherOrderComp;
