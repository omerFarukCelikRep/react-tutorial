import React, { useRef } from 'react'

function SelectorSample() {

    const h1Element = useRef(null);

    let pStyle = {
        color:'aqua',
        backgroundColor:'gray'
    }

    const changeColor = () => {
        document.getElementById('title').style.color = 'tomato';
        h1Element.current.style.color = 'blue';
    }

    return (
        <>
            <h1 ref={h1Element}>Deneme</h1> 
            <h1 id='title'>Ömer Faruk</h1>
            <p style={pStyle}>Lorem Ipsum</p>
            <button onClick={() => changeColor()}>Change Color</button>
        </>
    )
}

export default SelectorSample
