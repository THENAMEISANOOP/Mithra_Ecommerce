import React from 'react'
import { Link } from 'react-router-dom'

const ProductGrid = ({products}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        {products.map((product,index)=>(
            <Link key={index} to={`/product/${product._id}`}
            className='block group'>
                <div className='bg-white p-4 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1'>
                    <div className='w-full mb-4 overflow-hidden rounded-lg'>
                        <img src={product.images[0].url}
                         alt={product.images[0].altText || product.name}
                         className='w-full h-80 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105'
                           />
                    </div>
                    <h3 className='text-sm mb-2 group-hover:text-blue-600 transition-colors duration-300'>{product.name}</h3>
                    <p className='text-gray-500 font-medium text-sm tracking-tighter group-hover:text-gray-700 transition-colors duration-300'>
                        ${product.price}
                    </p>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default ProductGrid