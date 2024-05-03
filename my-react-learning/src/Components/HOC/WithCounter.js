import React from "react";

const WithCounter = (OriginalComponent) => {
  return function EnhancedComponent(props) {
    const [count, setCount] = React.useState(0);
    const incrementCount = () => {
      setCount(count + 1);
    };

    return (
      <OriginalComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };
};
export default WithCounter;
