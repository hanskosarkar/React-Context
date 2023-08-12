import React, { useContext } from 'react'
import { Cart } from '../CartContext';



const Product = (props) => {

    const {cart, setCart} = useContext(Cart);
    const {product} = props;
    // console.log(cart)

  return (
    <div className="product-card w-[300px] border border-gray-300 h-fit p-4 items-center shadow-md hover:shadow-lg">
        <h1 className="text-xl">Title: {product.title}</h1>
        <h2 className="text-xl">Id: {product.id}</h2>
        <h2 className="text-xl">Price: &#8377; {product.price}</h2>
        <div className="btn mt-5">

            {
                cart.includes(product) ? (<button className='py-3 px-6 bg-gray-300/75 rounded-md hover:bg-gray-300' onClick={() => {
                    setCart(cart.filter((cartItem) => cartItem.id !== product.id))
                  }}>Remove from Cart </button>) :
                (<button className='py-3 px-6 bg-gray-300/75 rounded-md hover:bg-gray-300' onClick={() => setCart([...cart,product])}>Add to Cart </button>)
            }
        
        </div>
    </div>
  )
}

export default Product;
