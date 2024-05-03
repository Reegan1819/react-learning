import React, { useMemo } from "react";

const UseMemoComp = () => {
  const [number, setNumber] = React.useState(0);
  const [dark, setDark] = React.useState(false);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  React.useEffect(() => {
    console.log("Theme Changed");

    return () => {
      console.log("Theme Changed CleanUp");
    };
  }, [themeStyles]);

  //   const themeStyles = useMemo(() => {
  //     return {
  //       backgroundColor: dark ? "black" : "white",
  //       color: dark ? "white" : "black",
  //     };
  //   }, [dark]);

  const doubleNumber = useMemo(() => {
    return SlowerFunc(number);
  }, [number]);

  //   const doubleNumber = SlowerFunc(number);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
};

export default UseMemoComp;

const SlowerFunc = (num) => {
  console.log("SlowerFunc Called");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};
