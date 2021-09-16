import React, { useEffect, useState } from 'react'

function EffectSample() {

    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)

    useEffect(() => {

        console.log('Use effect yalnızca 1 kez çalıştı');

    }, [])

    useEffect(() => {

        console.log('sadece sayaç state değiştiğinde çalışır');

    }, [counter])

    useEffect(() => {

        console.log('Herhangi bir state değiştiğinde çalışır')

    })

    return (
        <>
            <div>
                <span>{counter}</span>
                <button onClick={() => setCounter(counter + 1)}>Increase - 1</button>
            </div>
            <div>
            <span>{counter2}</span>
            <button onClick={() => setCounter2(counter2 + 1)}>Increase - 2</button>
            </div>
        </>
    )
}

export default EffectSample
