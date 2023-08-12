import React from 'react'
import { data } from './Data'
import Product from './Product';

const ProductContainer = () => {

    return (
        <div className="product-containe w-5/6 mx-auto my-10 flex items-center gap-5 flex-wrap justify-center">
            {
                data.map((product) => {
                    return <Product key={product.id} product={product}/>
                })
            }
        </div>
    )
}
export default ProductContainer
