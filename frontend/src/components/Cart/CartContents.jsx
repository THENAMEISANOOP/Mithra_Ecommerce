import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'

const CartContents = () => {
    const cartProducts = [
        {
            productId: 1,
            name: 'T-shirt',
            size: 'M',
            color: 'Red',
            quantity: 2,
            price: 19.99,
            image: 'https://picsum.photos/200?random=1',
        },
        {
            productId: 2,
            name: 'Jeans',
            size: 'L',
            color: 'Blue',
            quantity: 1,
            price: 49.99,
            image: 'https://picsum.photos/200?random=2',
        },
        {
            productId: 3,
            name: 'Sneakers',
            size: '10',
            color: 'Black',
            quantity: 1,
            price: 89.99,
            image: 'https://picsum.photos/200?random=3',
        },
        {
            productId: 4,
            name: 'Hat',
            size: 'One Size',
            color: 'Green',
            quantity: 1,
            price: 15.99,
            image: 'https://picsum.photos/200?random=4',
        },
    ]
  return (
    <div>
      {
        cartProducts.map((product, index) => {
            return (  // Add return here
                <div key={index} className='flex items-start justify-between py-4 border-b'>
                    <div className='flex items-start'>
                        <img src={product.image} 
                             alt={product.name} 
                             className='w-20 h-24 object-cover mr-4 rounded' />
                        <div>
                            <h3>{product.name}</h3>
                            <p className='text-sm text-gray-500'>
                                size: {product.size} | color: {product.color}
                            </p>
                            <div className='flex items-center mt-2'>
                                <button className='border rounded px-2  py-1 text-xl font-medium'>-</button>
                                <span className='mx-4'>{product.quantity}</span>
                                <button className='border rounded px-2  py-1 text-xl font-medium'>+</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>${product.price.toLocaleString()}</p>
                        <button>
                            <RiDeleteBin6Line className=' h-6 w-6 m-2 text-red-500 hover:text-red-700' />
                        </button>
                    </div>

                </div>
            )
        })
      }
    </div>
  )
}

export default CartContents
