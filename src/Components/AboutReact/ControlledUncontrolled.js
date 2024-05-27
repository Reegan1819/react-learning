import React from "react";

const ControlledUncontrolled = () => {
  return (
    <div>
      <h2>Controlled vs Uncontrolled Components</h2>

      <p>
        In React, components can be controlled or uncontrolled. Controlled
        components are components that store their state in the parent
        component, while uncontrolled components store their state internally.
      </p>

      <h3>Controlled Components</h3>
      <p>
        Controlled components are components that store their state in the
        parent component. This means that the parent component is responsible
        for managing the state of the controlled component and passing it down
        as props. Controlled components are useful when you need to share state
        between multiple components or when you need to perform actions on the
        state of the component from a parent component.
      </p>

      <h3>Uncontrolled Components</h3>
      <p>
        Uncontrolled components store their state internally, meaning that they
        manage their own state without the need for a parent component.
        Uncontrolled components are useful when you need to manage the state of
        a component independently of other components or when you need to handle
        user input without the need for a parent component.
      </p>

      <h2>When to Use Controlled Components</h2>
      <p>
        Controlled components are best used when you need to share state between
        multiple components or when you need to perform actions on the state of
        the component from a parent component. Controlled components are useful
        for managing complex state that involves multiple sub-values or complex
        update logic.
      </p>

      <h2>When to Use Uncontrolled Components</h2>
      <p>
        Uncontrolled components are best used when you need to manage the state
        of a component independently of other components or when you need to
        handle user input without the need for a parent component. Uncontrolled
        components are useful for simple components that do not have complex
        state or props.
      </p>

      <h2>Key Differences Between Controlled and Uncontrolled Components</h2>
      <ul>
        <li>
          State Management: Controlled components store their state in the
          parent component, while uncontrolled components store their state
          internally.
        </li>
        <li>
          Prop Drilling: Controlled components require prop drilling to pass
          state down to child components, while uncontrolled components do not
          require prop drilling.
        </li>
        <li>
          Complexity: Controlled components are more complex to implement and
          manage, while uncontrolled components are simpler and easier to work
          with.
        </li>
        <li>
          Performance: Controlled components may have a performance impact due
          to prop drilling, while uncontrolled components may have better
          performance due to internal state management.
        </li>
        <li>
          Flexibility: Controlled components provide more flexibility in
          managing state and performing actions on the state, while uncontrolled
          components are more limited in their capabilities.
        </li>
      </ul>
    </div>
  );
};

export default ControlledUncontrolled;
