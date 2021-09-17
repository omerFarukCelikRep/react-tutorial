import React from 'react'

function BAButton(props) {

    let buttonCss = {
        color:props.color
    }

    return (
        <>
            <button style={buttonCss} >{props.title}</button>   
        </>
    )
}

export default BAButton
ps  <button