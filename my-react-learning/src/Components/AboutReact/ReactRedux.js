import React from "react";

const ReactRedux = () => {
  return (
    <div>
      <h2>React Redux</h2>

      <p>
        Redux is a predictable state container designed to help you write
        JavaScript apps that behave consistently across client, server, and
        native environments and are easy to test. While it's mostly used as a
        state management tool with React, you can use it with any other
        JavaScript framework or library. Redux maintains the state of an entire
        application in a single immutable state tree (object), which can't be
        changed directly. When something changes, a new object is created (using
        actions and reducers).
      </p>

      <h2>Key Concepts of Redux</h2>
      <ul>
        <li>Store</li>
        <li>Actions</li>
        <li>Reducers</li>
        <li>Dispatch</li>
        <li>Provider</li>
        <li>Connect</li>
      </ul>

      <h2>Store</h2>
      <p>
        The store is the object that holds the application state and provides a
        few helper methods to access the state, dispatch actions, and register
        listeners. The entire state of your application is stored in an object
        tree inside a single store. The only way to change the state tree is to
        emit an action, an object describing what happened. To specify how the
        actions transform the state tree, you write pure reducers. Reducers are
        just pure functions that take the previous state and an action, and
        return the next state. Actions are payloads of information that send
        data from your application to your store. They are the only source of
        information for the store. You send them to the store using
        store.dispatch().
      </p>

      <h2>Actions</h2>
      <p>
        Actions are plain JavaScript objects that have a type field. You can
        think of an action as an event that describes something that happened in
        the application. The type field should be a string that gives this
        action a descriptive name, like "todos/todoAdded". An action object can
        have other fields with additional information about what happened. By
        convention, we put that information in a field called payload.
      </p>

        <h2>Reducers</h2>
        <p>
          Reducers specify how the application's state changes in response to
          actions sent to the store. Remember that actions only describe what
          happened, but don't describe how the application's state changes.
          Reducers are the pure functions that take the current state and the
          action, and return the next state. They must be pure functions—functions
          that return the exact same output for given inputs. They should also be
          free of side-effects. This is what enables exciting features like hot
          reloading and time travel.
        </p>
    </div>
  );
};

export default ReactRedux;
