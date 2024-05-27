import React from "react";

const JavaScriptQuestions = () => {
  return (
    <div>
      <h2>JavaScript Questions</h2>

      <h3>What is JavaScript?</h3>
      <p>
        JavaScript is a high-level, interpreted programming language that
        conforms to the ECMAScript specification. It is a versatile language
        that is used to create interactive websites and web applications.
      </p>

      <h3>What are the data types in JavaScript?</h3>
      <p>
        JavaScript has six primitive data types: string, number, boolean, null,
        undefined, and symbol. It also has an object data type, which includes
        arrays, functions, and objects.
      </p>

      <h3>What is the difference between let, const, and var?</h3>
      <p>
        <strong>let:</strong> The let keyword allows you to declare block-scoped
        variables. Variables declared with let are only accessible within the
        block they are declared in.
      </p>
      <p>
        <strong>const:</strong> The const keyword allows you to declare
        variables that cannot be reassigned. The value of a const variable
        cannot change once it has been assigned.
      </p>
      <p>
        <strong>var:</strong> The var keyword allows you to declare variables
        that are function-scoped. Variables declared with var are accessible
        throughout the function they are declared in.
      </p>

      <h3>What is a closure in JavaScript?</h3>
      <p>
        A closure is a function that has access to its own scope, the scope of
        its parent function, and the global scope. Closures are commonly used to
        create private variables and functions in JavaScript.
        <p>
          A closure is a function that remembers its outer variables and can
          access them. This happens because functions in JavaScript form
          closures, meaning they remember the environment in which they were
          created.
        </p>
      </p>

      <h3>What is the DOM?</h3>
      <p>
        The Document Object Model (DOM) is a programming interface for HTML and
        XML documents. It represents the structure of a document as a tree of
        nodes, allowing you to interact with and manipulate the content of a web
        page.
      </p>
      <h3>What is event delegation?</h3>
      <p>
        Event delegation is a technique in JavaScript where you add a single
        event listener to a parent element to listen for events that happen on
        its children. This allows you to avoid adding event listeners to each
        individual child element.
      </p>
      <h3>What is a promise in JavaScript?</h3>
      <p>
        A promise is an object that represents the eventual completion or
        failure of an asynchronous operation. It allows you to handle the result
        of an asynchronous operation in a more readable and manageable way.
      </p>
      <h3>What is the difference between == and ===?</h3>
      <p>
        The == operator compares two values for equality, but it does not
        consider the data type of the values. The === operator compares two
        values for equality and considers the data type of the values. It is
        known as the strict equality operator.
      </p>

      <h3>Explain asynchronous programming in JavaScript.</h3>
      <p>
        Asynchronous programming in JavaScript allows you to perform tasks
        without blocking the main thread. This is done using callbacks,
        promises, and async/await. Asynchronous programming is commonly used
        when working with APIs, handling user input, and performing other
        time-consuming tasks.
      </p>
      <h3>What is a callback function?</h3>
      <p>
        A callback function is a function that is passed as an argument to
        another function and is executed after a specific event occurs. Callback
        functions are commonly used in asynchronous programming to handle the
        result of an asynchronous operation.
      </p>
      <h3>Explain the concept of hoisting in JavaScript.</h3>
      <p>
        Hoisting is a JavaScript mechanism where variables and function
        declarations are moved to the top of their containing scope during
        compilation. This allows you to use a variable or function before it has
        been declared.
      </p>
      <h3>What is an IIFE (Immediately Invoked Function Expression)?</h3>
      <p>
        An IIFE is a JavaScript function that is executed immediately after it
        is defined. It is commonly used to create a new scope for variables and
        functions to avoid polluting the global scope.
      </p>
      <h3>
        What are arrow functions, and how do they differ from regular functions?
      </h3>
      <p>
        Arrow functions are a more concise way to write functions in JavaScript.
        They have a shorter syntax and do not bind their own this value. Arrow
        functions are commonly used in modern JavaScript code for their
        simplicity and readability.
      </p>
      <p>
        They do not have their own this context; they inherit this from the
        parent scope. They cannot be used as constructors and do not have a
        prototype property. They do not have the arguments object

      </p>
      <h3>
      How do you handle errors in JavaScript?
      </h3>
      <p>
        Errors in JavaScript can be handled using try...catch statements. The try
        block contains the code that may throw an error, and the catch block
        handles the error if one occurs. You can also use the finally block to
        execute code after the try and catch blocks, regardless of whether an
        error occurred.
      </p>
      
    </div>
  );
};

export default JavaScriptQuestions;
