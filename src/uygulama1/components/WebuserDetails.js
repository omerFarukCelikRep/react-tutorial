import React from 'react'

function WebuserDetails(props) {

    let {user} = props;

    return (
        <>
            <span>{user.name.toUpperCase()}</span>
            <hr />
            <span>{user.name.toUpperCase()}</span>
            <button onClick={() => props.calc()}>Hesapla</button>
        </>
    )
}

export default WebuserDetails
