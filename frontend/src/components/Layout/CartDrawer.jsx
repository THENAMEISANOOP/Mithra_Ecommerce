import React from 'react'
import { IoMdClose } from 'react-icons/io'
import CartContents from '../Cart/CartContents'

const CartDrawer = ({drawerOpen,toggleCartDrawer}) => {
 
  
  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg
    transform transition-tarnsform duration-300 flex flex-col z-50 
    ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>

      {/* close button  */}
      <div className='flex justify-end p-4'>
        <button onClick={toggleCartDrawer} className='text-gray-500 hover:text-gray-800'>
          <IoMdClose className='h-6 w-6 text-gray-600'  />
        </button>
      </div>
      {/* cart content with scrollable area */}
      <div className='flex-grow p-4 overflow-y-auto'>
        <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
        {/* Component for the cart content */}
        <CartContents />
        
      </div>
      {/* Checkout button */}
      <div className='p-4 bg-white sticky bottom-0'>
        <button className='w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200'>
          Checkout
        </button>
        <p className='text-sm text-gray-500 mt-2 tracking-tighter text-center'>
          Shipping and taxes calculated at checkout.
        </p>

      </div>

      
    </div>
  )
}

export default CartDrawer
