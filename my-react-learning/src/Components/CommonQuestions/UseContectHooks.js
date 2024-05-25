import React from "react";

const useContextHooks = () => {
  return (
    <div>
      <div style={{ padding: " 20px" }}>
        <h1>useContext Hooks</h1>
        <p>
          useContext is a Hook that allows you to subscribe to the React context
          without introducing nesting. It can be used to get the current value
          of the context and re-render a component when the context value
          changes.
        </p>
        <h2>What are the rules of useContext?</h2>
        <p>useContext can only be used inside a functional component.</p>
        <h2>What are the advantages of useContext?</h2>
        <p>
          useContext can help you avoid prop drilling by providing a way to pass
          data through the component tree without having to pass props down
          manually at every level.
        </p>
        <h2>How to use useContext?</h2>

        <p>
          useContext takes a context object (the value returned from
          React.createContext) and returns the current context value for that
          context. The current context value is determined by the value prop of
          the nearest{` <MyContext.Provider>`} above the calling component in
          the tree.
        </p>

        <h2>What are the advantages of using useContext over prop drilling?</h2>
        <p>
          useContext can help you avoid prop drilling by providing a way to pass
          data through the component tree without having to pass props down
          manually at every level. This can make your code cleaner and more
          maintainable.
        </p>
        <h2>
          explain prop drilling and how useContext can help avoid prop drilling
        </h2>
        <p>
          Prop drilling is the process of passing props down from a parent
          component to a child component through multiple levels of nesting.
          This can make your code harder to read and maintain. useContext can
          help you avoid prop drilling by providing a way to pass data through
          the component tree without having to pass props down manually at every
          level.
        </p>
      </div>
    </div>
  );
};

export default useContextHooks;
