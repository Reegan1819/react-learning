import React from "react";

const VirtualDom = () => {
  return (
    <div style={{ padding: " 20px" }}>
      <h2>What is the virtual DOM?</h2>

      <p>
        <strong>Virtual DOM:</strong> React creates an in-memory data structure
        cache, computes the resulting differences, and then updates the
        browser's displayed DOM efficiently.
      </p>

      <p>
        <strong>Performance:</strong> React uses a virtual DOM that makes the
        user experience better and the developer's work faster.
      </p>


      <h2>What is the virtual DOM? </h2>

      <h3>Definition:</h3>

      <p>
        The virtual DOM VDOM is a programming concept where an ideal, or
        “virtual”, representation of a UI is kept in memory and synced with the
        “real” DOM by a library such as ReactDOM. This process is called
        reconciliation.
      </p>
      <p>
        React keeps a lightweight representation of the real DOM in the memory,
        and that is known as the virtual DOM. When the state of an object
        changes, the virtual DOM changes only that object in the real DOM,
        rather than updating all the objects. The following are some of the most
        frequently asked react interview questions.
      </p>

      <h3>How does the virtual DOM work?</h3>
      <p>The virtual DOM works in three simple steps:</p>
      <p>
        <strong>
          1. Whenever any underlying data changes, the entire UI is re-rendered
          in virtual DOM representation.
        </strong>
      </p>
      <p>
        <strong>
          2. Then the difference between the previous DOM representation and the
          new one is calculated.
        </strong>
      </p>
      <p>
        <strong>
          3. Once the calculations are done, the real DOM will be updated with
          only the things that have actually changed.
        </strong>
      </p>
      <p>This makes the process faster and more efficient.</p>

      <h3>What is the difference between the real DOM and the virtual DOM?</h3>
      <p>
        The real DOM is updated every time the state of our application changes.
        This could potentially be slow.
      </p>

      <p>
        The virtual DOM is a lightweight copy of the real DOM. It is used to
        improve the performance of the web apps. The virtual DOM is only a
        virtual representation of the DOM. Every time the state of our
        application changes, the virtual DOM gets updated instead of the real
        DOM.
      </p>
    </div>
  );
};

export default VirtualDom;
