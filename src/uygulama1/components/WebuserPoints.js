import React from 'react'

function WebuserPoints(props) {

    let {points} = props;

    return (
        <>
            {
                points.map((item,key) => (<li key={key}>{item * 1.5}</li>))
            }
        </>
    )
}

export default WebuserPoints
