import React from "react";

const PureComponent = () => {
  return (
    <div>
      <h1>Pure Component</h1>
      <p>
        React pure components are the components that do not re-render when the
        value of props and state has been updated with the same values. Since
        these components do not cause re-rendering when the same values are
        passed thus they improve performance.
      </p>

      <h2>Advantages of Pure Components</h2>
      <ul>
        <li>Performance</li>
        <li>Code Readability</li>
        <li>Code Maintainability</li>
        <li>Code Scalability</li>
        <li>Code Consistency</li>
        <li>Code Quality</li>
        <li>Code Simplicity</li>
        <li>Code Consistency</li>
      </ul>

      <h2>Disadvantages of Pure Components</h2>
      <p>
        Limited Use Cases: Pure components are not suitable for all use cases.
        They are best used for simple components that do not have complex state
        or props. Limited Customization: Pure components do not allow for
        customization of the shouldComponentUpdate method, which can limit their
        flexibility. Limited Control: Pure components do not provide
        fine-grained control over when they should re-render, which can lead to
        unexpected behavior in some cases. Limited Performance Improvements:
        Pure components may not always provide a significant performance
        improvement over regular components, especially in applications with
        complex state management.
      </p>

      <h2>When to Use Pure Components</h2>

      <p>
        Pure components are best used for simple components that do not have
        complex state or props. They are ideal for components that receive props
        from a parent component and render based on those props. Pure components
        are also useful for optimizing performance in applications with a large
        number of components that re-render frequently. However, pure components
        may not be suitable for all use cases, especially those that require
        fine-grained control over when a component should re-render.
      </p>

      <h2>How to Create a Pure Component</h2>
      <p>
        To create a pure component in React, you can extend the PureComponent
        class instead of the Component class. This will automatically implement
        the shouldComponentUpdate method for you, which will compare the current
        props and state with the next props and state and prevent re-rendering
        if they are the same. Here is an example of a simple pure component:
      </p>
      <pre>
        {`
            import React, { PureComponent } from 'react';

            class MyPureComponent extends PureComponent {
                render() {
                    return <div>{this.props.text}</div>;
                }
            }

            export default MyPureComponent;
            `}
      </pre>

      <h2>Conclusion</h2>

      <p>
        Pure components are a useful feature in React that can help improve the
        performance of your application by preventing unnecessary re-renders. By
        using pure components, you can optimize the rendering process and ensure
        that your application runs smoothly. However, pure components are not
        suitable for all use cases, so it is important to understand when and
        how to use them effectively.
      </p>
    </div>
  );
};

export default PureComponent;
