import React from 'react'

function JsxEventSample() {

    const hello = () => {
        alert("I'm Batman");
    }

    return (
        <>
            <button onClick={hello} >Hello</button>
        </>
    )
}

export default JsxEventSample
