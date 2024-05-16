import React from "react";

const JavaScriptQuestions = () => {

  return (
    <div>
      <h2>JavaScript Questions</h2>

      <h3>What is JavaScript?</h3>
      <p>
        JavaScript is a client-side and server-side scripting language inserted
        into HTML pages and is understood by web browsers. JavaScript is also an
        Object-based Programming language.
      </p>
      <p>
        JavaScript is a programming language used to create dynamic content for
        websites. It achieves this by adding new HTML elements while modifying
        existing ones. Many coders enhance web development skills using
        JavaScript to create user-friendly and interactive websites.
      </p>
      <h3>What are the features of JavaScript?</h3>
      <p>
        JavaScript is a lightweight, interpreted programming language. It is
        designed for creating network-centric applications. It is complementary
        to and integrated with Java. JavaScript is very easy to implement
        because it is integrated with HTML. It is open and cross-platform.
      </p>

      <h3>What are the advantages of JavaScript?</h3>
      <p>
        JavaScript is a versatile language that can be used for a variety of
        purposes. It is a client-side scripting language that can be used to
        create dynamic web pages. It is also a server-side scripting language
        that can be used to create web applications. JavaScript is a powerful
        language that can be used to create interactive web pages. It is also a
        flexible language that can be used to create a wide range of
        applications. JavaScript is a popular language that is used by many
        developers. It is a language that is easy to learn and use. It is also a
        language that is supported by many browsers. JavaScript is a language
        that is used by many developers to create web applications.
      </p>

      <h3>What are the disadvantages of JavaScript?</h3>
      <p>
        JavaScript is a language that is not supported by all browsers. It is
        also a language that is not supported by all devices. JavaScript is a
        language that is not supported by all operating systems. JavaScript is a
        language that is not supported by all web servers. JavaScript is a
        language that is not supported by all databases. JavaScript is a
        language that is not supported by all web hosting providers. JavaScript
        is a language that is not supported by all web development tools.
      </p>
      <p>
        Despite its versatility, JavaScript presents some disadvantages,
        including security vulnerabilities such as cross-site scripting (XSS)
        attacks, performance limitations due to single-threaded execution, and
        inconsistencies across different browsers, necessitating thorough
        testing and optimization efforts
      </p>

      <h3>What are the data types supported by JavaScript?</h3>
      <p>
        JavaScript supports seven different data types, which are undefined,
        null, boolean, string, symbol, number, and object.
      </p>
      <p>
        JavaScript is a loosely typed language, meaning that variables do not
        need to be declared with a specific data type. This flexibility allows
        developers to create dynamic and interactive web applications.
      </p>
      <p>
        JavaScript also supports complex data types, such as arrays and objects,
        which allow developers to store and manipulate large amounts of data
        efficiently.
      </p>

      <h3>What is the difference between null and undefined in JavaScript?</h3>
      <p>
        Null and undefined are two distinct data types in JavaScript. Null
        represents the intentional absence of any value, while undefined
        represents the absence of a value that has not been assigned.
      </p>

      <h3>What is the difference between == and === in JavaScript?</h3>

      <p>
        The == operator compares two values for equality, performing type
        coercion if necessary. The === operator compares two values for equality
        without performing type coercion, meaning that the values must be of the
        same type to be considered equal.
      </p>
      <p>
        For example, the expression 1 == '1' would return true, as the values
        are equal after type coercion. However, the expression 1 === '1' would
        return false, as the values are not of the same type.
      </p>

      <h3>What is the difference between let, const, and var in JavaScript?</h3>
      <p>
        The let, const, and var keywords are used to declare variables in
        JavaScript. The main difference between them is how they handle variable
        scope and reassignment.
      </p>
      <p>
        While let and const are block-scoped, var declarations are either
        globally scoped or function-scoped. Let variables can be updated but not
        re-declared, const variables cannot be updated or re-declared, and var
        variables may both be updated and re-declared inside their scope.
      </p>

      <h3>
        what is type coercion in JavaScript and how does it differ from type
      </h3>

      <p>
        Type coercion is the process of converting a value from one data type to
        another. JavaScript is a loosely typed language, meaning that variables
        do not need to be declared with a specific data type. This flexibility
        allows developers to create dynamic and interactive web applications.
      </p>

      <h3>
        Difference between let and const in JavaScript and when to use them
      </h3>
      <p>
        The let and const keywords are used to declare variables in JavaScript.
        The main difference between them is that let variables can be updated
        but not re-declared, while const variables cannot be updated or
        re-declared.
      </p>
      <p>
        When to use let: Use let when you need to reassign the variable value.
        When to use const: Use const when you do not need to reassign the
        variable value.
      </p>

      <h3>What is the difference between var, let, and const in JavaScript?</h3>
      <p>
        The var, let, and const keywords are used to declare variables in
        JavaScript. The main difference between them is how they handle variable
        scope and reassignment.
      </p>

      <p>
        While var declarations are either globally scoped or function-scoped,
        let and const are block-scoped. Var variables can be updated and
        re-declared inside their scope, let variables can be updated but not
        re-declared, and const variables cannot be updated or re-declared.
      </p>

      <h3>What is hoisting in JavaScript?</h3>
      <p>
        Hoisting is a JavaScript mechanism where variables and function
        declarations are moved to the top of their containing scope during the
        compilation phase. This allows variables and functions to be used before
        they are declared.
      </p>

      <h3>Is javascript a statically typed or a dynamically typed language?</h3>
      <p>
        JavaScript is a dynamically typed language, meaning that variables do
        not need to be declared with a specific data type. This flexibility
        allows developers to create dynamic and interactive web applications.
      </p>

      <h3>What is NaN property in JavaScript?</h3>
      <p>
        The NaN property in JavaScript represents a value that is "Not a
        Number." It is returned when a mathematical operation cannot be
        performed or when a value is not a valid number.
      </p>
      <p>
        For example, dividing a string by a number or performing a mathematical
        operation on an undefined value will result in NaN.
      </p>

      <h3>What is an Immediately Invoked Function in JavaScript?</h3>
      <p>
        An Immediately Invoked Function (IIFE) is a JavaScript function that is
        executed immediately after it is defined. It is a self-invoking function
        that does not require a function call to be executed.
      </p>
      <p>
        IIFEs are commonly used to create private scopes, prevent variable
        hoisting, and avoid polluting the global namespace with variables and
        functions.
      </p>
      <h4>Examples</h4>

      <p>
        {`(function() {
                console.log('Hello, World!');
            })();`}
      </p>
      <p>
        {` (() => {
                console.log('Hello, World!');
            })();`}
      </p>


    </div>
  );
};

export default JavaScriptQuestions;
