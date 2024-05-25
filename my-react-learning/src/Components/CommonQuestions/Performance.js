import React from "react";

const PerformanceReact = () => {
  return (
    <div style={{ padding: " 20px" }}>
      <h2>Performance</h2>
      <p>
        React uses a virtual DOM to improve performance. The virtual DOM is a
        lightweight copy of the actual DOM. When the state of a component
        changes, React updates the virtual DOM first, compares it with the
        actual DOM, and then only updates the parts of the actual DOM that have
        changed. This makes React fast and efficient.
      </p>
      <p>
        React also uses a technique called reconciliation to optimize the
        rendering process. Reconciliation is the process of comparing the
        virtual DOM with the actual DOM and determining the minimum number of
        changes needed to update the actual DOM. React uses a diffing algorithm
        to perform this comparison and update only the parts of the actual DOM
        that have changed.
      </p>
      <p>
        React also provides a shouldComponentUpdate lifecycle method that can be
        used to optimize performance. This method can be used to prevent a
        component from re-rendering if its props or state have not changed. By
        implementing shouldComponentUpdate, you can prevent unnecessary
        re-renders and improve the performance of your React application.
      </p>
    </div>
  );
};

export default PerformanceReact;
