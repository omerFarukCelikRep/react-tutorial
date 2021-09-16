import React, { useState } from 'react'

function StateErrorSample() {

    const [counter, setCounter] = useState(0);

    //

    return (
        <>
            <h1>{counter}</h1>
            {/* <button onClick={setCounter(counter + 1)}>Change</button> */}
        </>
    )
}

export default StateErrorSample
