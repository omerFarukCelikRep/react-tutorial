import React, { useEffect, useMemo, useState } from 'react'

function MemoHook2() {

    const [counter2, setCounter2] = useState(0);
    
    console.log('Memo Hook 2 Çalıştı');
    
    const dataCheck = useMemo(() => {
        return console.log('Data Check Function Worked!!!');
    },[counter2]) 

    console.log(dataCheck);
    
    useEffect(() => {
        console.log('Memo Hook Use Effect!!')
    },[])

    return (
        <>
            <h1>Memo hook 2 !!</h1>
            <h2>{counter2}</h2>
            <button onClick={() => setCounter2(counter2 + 1)}>Increase Counter 2</button>
        </>
    )
}

export default MemoHook2