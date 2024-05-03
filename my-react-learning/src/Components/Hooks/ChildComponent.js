import React, { useEffect } from "react";

const ChildComponent = React.memo(({ onClick, handleNameChange, name }) => {
  console.log("ChildComponent rendered");

  useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("useEffect cleanup");
    };
  }, [])
  
  return (
    <div>
      <button onClick={onClick}>Click me</button>
      <input type="text" onChange={handleNameChange} value={name} />
    </div>
  );
});

export default ChildComponent;
