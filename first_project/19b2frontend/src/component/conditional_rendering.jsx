import React from 'react';


function ConditionalRendering() {
    const [index, setIndex] = React.useState();
    const Show = (indexx) => {
        setIndex(indexx);
    };

    return (
        <div>
            <button onClick={() => Show(0)}>B1</button>
            <button onClick={() => Show(1)}>B2</button>
            <button onClick={() => Show(2)}>B3</button>
            <div>
                <p>Current Index: {index}</p>
            </div>
        </div>
    )
}

export default ConditionalRendering