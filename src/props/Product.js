import React from 'react'
import ProductDetails from './ProductDetails'
import ProductHeader from './ProductHeader'

function Product() {

    let productDetail = {
        name:'IPhone',
        price:10000,
        properties:['Suya Dayanıklı', 'X px kamera', 'şarj aleti paralı']
    };

    const addCart = () => {
        alert('Ürün Sepete Eklendi');
    }

    return (
        <>
            <ProductHeader product={productDetail} />
            <ProductDetails properties={productDetail.properties} add={addCart} />
        </>
    )
}

export default Product
