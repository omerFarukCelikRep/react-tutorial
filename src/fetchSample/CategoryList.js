import React, { useEffect, useState } from 'react'
import { apiUrl } from '../env/config';

function CategoryList() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        
        fetch(apiUrl + '/api/categories')
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
            })
    }, [])

    return (
        <>
            <h1>Categories</h1>
            <ul>
                {
                    categories.map((item,key) => (<li key={key}>{item.name}</li>))
                }
            </ul>
        </>
    )
}

export default CategoryList
