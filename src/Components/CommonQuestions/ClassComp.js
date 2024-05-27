import React from "react";

const ClassComp = () => {
  return (
    <div style={{ padding: " 20px" }}>
      <h2>What are the differences between class and functional components?</h2>

      <table>
        <tr>
          <th>Class Components</th>
          <th>Functional Components</th>
        </tr>
        <tr>
          <td>
            Class components are ES6 classes that extend from React.Component
            and can have state and lifecycle methods.
          </td>
          <td>
            Functional components are functions that take in props and return
            JSX.
          </td>
        </tr>
        <tr>
          <td>Class components are more complex and verbose.</td>
          <td>Functional components are simpler and easier to read.</td>
        </tr>
        <tr>
          <td>Class components can have state and lifecycle methods.</td>
          <td>Functional components cannot have state or lifecycle methods.</td>
        </tr>
        <tr>
          <td>
            Class components can use the this keyword to access props and state.
          </td>
          <td>Functional components cannot use the this keyword.</td>
        </tr>
        <tr>
          <td>
            Class components can use lifecycle methods like componentDidMount,
            componentDidUpdate, and componentWillUnmount.
          </td>
          <td>Functional components cannot use lifecycle methods.</td>
        </tr>
        <tr>
          <td>
            Class components can have performance optimizations like
            shouldComponentUpdate.
          </td>
          <td>Functional components cannot have performance optimizations.</td>
        </tr>
        <tr>
          <td>Class components can have refs.</td>
          <td>Functional components cannot have refs.</td>
        </tr>
        <tr>
          <td>Class components can have error boundaries.</td>
          <td>Functional components cannot have error boundaries.</td>
        </tr>
      </table>
    </div>
  );
};

export default ClassComp;
