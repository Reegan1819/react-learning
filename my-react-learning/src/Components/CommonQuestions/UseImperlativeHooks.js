import React from "react";

const UseImperativeHooks = () => {
  return (
    <div style={{ padding: " 20px" }}>
      <h1>useImperativeHandle</h1>
      <p>
        useImperativeHandle is a hook that allows you to customize the instance
        value that is exposed to parent components when using ref. It is useful
        for hiding certain properties or methods from the parent component.
      </p>
      <h2>What is the purpose of useImperativeHandle?</h2>
      <p>
        The purpose of useImperativeHandle is to customize the instance value
        that is exposed to parent components when using ref. This can be useful
        for hiding certain properties or methods from the parent component.
      </p>
      <h2>How does useImperativeHandle work?</h2>
      <p>
        useImperativeHandle takes a ref object and a function as arguments. The
        function should return an object that will be exposed to the parent
        component when using ref. This can be used to hide certain properties or
        methods from the parent component.
      </p>
    </div>
  );
};

export default UseImperativeHooks;
