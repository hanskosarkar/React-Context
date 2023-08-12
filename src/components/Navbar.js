import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Cart } from '../CartContext';

function Navbar() {
  const {cart} = useContext(Cart);

  return (
    <nav className=' bg-zinc-200'>
      <div className="nav-wrapper w-5/6 mx-auto flex items-center justify-between p-2">
        <div className="logo text-3xl font-semibold cursor-pointer"><Link to="/">Home</Link></div>
        <div className="cart text-2xl font-semibold cursor-pointer"><Link to="/cart">Cart ({cart.length})</Link></div>
      </div>
    </nav>
  )
}

export default Navbar;