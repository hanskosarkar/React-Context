import React, { useContext, useEffect, useState } from 'react'
import { Cart } from '../CartContext'
import Product from './Product';

const CartContainer = () => {

    const [total, setTotal] = useState(0);
    const { cart } = useContext(Cart);

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
    }, [cart])

    return (
        <>
        
            {
                cart.length ? <div className=' w-full h-[92vh] mx-auto flex'>
                    <div className='w-1/6 p-5 pt-10 text-xl font-semibold border-r-2 border-gray-400/40 flex justify-center'>
                        <h2>Total: &#8377; {total}</h2>
                    </div>
                    <div className='w-5/6 mx-auto pt-10 p-5 flex gap-5 flex-wrap justify-center'>
                        {
                            cart.map((cartItem) => {
                                return <Product key={cartItem.id} product={cartItem} />
                            })
                        }
                    </div>
                </div> : <div className="w-5/6 font-semibold mx-auto h-[90vh] flex items-center justify-center">
                    <div>
                        <h2 className="text-center text-5xl">Your cart is empty!</h2>
                        <h3 className='text-lg text-center mt-2'>Please add items to the cart to continue shopping.</h3>
                    </div>
                </div>
            }
            
        </>
    )
}

export default CartContainer;
