import React, { useState } from 'react';

function UseStateHook() {
    // Declare a state variable and its initial value
    const [count, setCount] = useState(0);

    //definition

    // Define a function that will update the state variable

    //

    // Update the state variable
    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default UseStateHook;