import React from 'react'

function ProductDetails(props) {
    return (
        <>
            <h2>Özellikler</h2>

            <ul>
                {
                    props.properties?.map((item,key) => (<li key={key}>{item}</li>))
                }
            </ul>
            <button onClick={() => {props.add()}} >Sepete Ekle</button>
        </>
    )
}

export default ProductDetails
