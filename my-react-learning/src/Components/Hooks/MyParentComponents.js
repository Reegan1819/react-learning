import { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

const MyParentComponent = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const handleClick = useCallback(() => {
        console.log('handleClick');
        setCount(count + 1);
    }, [count]);

    const handleNameChange = useCallback((e) => {
        console.log('handleNameChange');
        setName(e.target.value);
    }, []);

    return (
        <div>
            <h2>Count: {count}</h2>
           <ChildComponent onClick={handleClick} name={name} handleNameChange={handleNameChange} />
        </div>
    );
}

export default MyParentComponent;