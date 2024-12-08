import React from 'react';

function ClickComponent() {
    const [count, setCount] = React.useState(0);
    const increment = () => {
        // setcount("  asdas");
        setCount(count + 1);
        console.log('adid');
    };
    const decreament = () => {
        // setcount("  asdas");
        setCount(count - 1);
        console.log('rahman');
    };
    return (
        <div>
            <p>{count}</p>
            <button value={count} onClick={increment}>increament</button> <button value={count} onClick={decreament}>decreament</button>
        </div>
    )
}

export default ClickComponent