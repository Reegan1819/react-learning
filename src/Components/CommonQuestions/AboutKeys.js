import React from "react";

const AboutKeys = () => {
  return (
    <div style={{ padding: " 20px" }}>
      <h1>Keys</h1>
      <p>
        Keys help React identify which items have changed, are added, or are
        removed. Keys should be given to the elements inside the array to give
        the elements a stable identity:
      </p>
      <p>
        <strong>
          1. Keys should be given to the elements inside the array to give the
          elements a stable identity:
        </strong>
      </p>
      <p>
        <strong>
          2. Keys used within arrays should be unique among their siblings:
        </strong>
      </p>
      <p>
        A key is a unique identifier and it is used to identify which items have
        changed, been updated or deleted from the lists. It is a good practice
        to use keys while working with lists.
      </p>
      <p>
        It also helps to determine which components need to be re-rendered
        instead of re-rendering all the components every time. Therefore, it
        increases performance, as only the updated components are re-rendered
      </p>
      <p>
        <strong>Example:</strong>

        <pre>
          {`
                const numbers = [1, 2, 3, 4, 5];
                const listItems = numbers.map((number) =>
                <li key={number.toString()}>{number}</li>
                );
                `}
        </pre>
      </p>

      <p>
        In the above example, the key is set to the number.toString(). This
        helps React to identify which items have changed, are added, or are
        removed.
      </p>

      <p>
        <strong>What will happen if you do not use keys?</strong>
      </p>
      <p>
        If you do not use keys, React will use the array index as a key. This
        can cause issues if you are reordering the list items or if the list
        items are being updated.
      </p>

      
    </div>
  );
};

export default AboutKeys;
