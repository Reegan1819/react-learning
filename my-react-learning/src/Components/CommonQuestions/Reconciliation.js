import React from "react";

const Reconciliation = () => {
  return (
    <div>
      <h1>Reconciliation</h1>
      <p>
        Reconciliation is the process through which React updates the DOM. When
        a component’s props or state change, React decides whether an actual DOM
        update is necessary by comparing the newly returned element with the
        previously rendered one. If the newly returned element is different,
        React will update the DOM.
      </p>
      <p>
        Reconciliation is the reason why you don’t have to worry about the
        changing state of your app and also the reason why React is so fast.
        React’s diffing algorithm allows us to declaratively define how the UI
        should look and React takes care of the rest.
      </p>

      <h2>How does reconciliation work?</h2>
      <p>
        When a component’s props or state change, React decides whether an
        actual DOM update is necessary by comparing the newly returned element
        with the previously rendered one. If the newly returned element is
        different, React will update the DOM.
      </p>

      <h2>What is the diffing algorithm?</h2>
      <p>React uses a heuristic O(n) algorithm based on two assumptions:</p>

        <ul>
            <li>Two elements of different types will produce different trees.</li>
            <li>The developer can hint at which child elements may be stable across different renders with a key prop.</li>
        </ul>

        <p>
            In practice, these assumptions are valid for almost all practical use cases.
        </p>
        
    </div>
  );
};

export default Reconciliation;
