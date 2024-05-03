import { useEffect, useLayoutEffect, useState } from "react";

const UseEffectHooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    useLayoutEffect(() => {

        console.log('useLayoutEffect');
        return () => {
            console.log('useLayoutEffect cleanup');
        };

      
    }, [])

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
};


export default UseEffectHooks;