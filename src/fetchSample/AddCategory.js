import React, { useState } from 'react'
import { apiUrl } from '../env/config';

function AddCategory() {
    
    const [categoryName, setCategoryName] = useState('');

    const add = () => {

        let requestOptions = {
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            method:'POST',
            body:JSON.stringify({categoryName:categoryName})
        };

        fetch(apiUrl + '/api/categories', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                console.log('Data Eklendi', data);
            })
    }

    return (
        <>
            <input type='text' onChange={(e) => setCategoryName(e.target.value)} value={categoryName} />
            <button onClick={() => add()} >Add</button>
        </>
    )
}

export default AddCategory
