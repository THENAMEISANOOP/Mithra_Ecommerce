import React from 'react'
import mensCollectionImage from '../../assets/mens-collection.webp'
import womensCollectionImage from '../../assets/womens-collection.webp'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const GenderCollectionSection = () => {
  return (
    <section className='py-16 px-4 lg:px-8 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
          {/* Women's Collection */}
          <div className='relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <img 
              src={womensCollectionImage} 
              alt="Women's fashion collection"
              className='w-full h-[500px] md:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent'>
              <div className='absolute bottom-8 left-8'>
                <h2 className='text-3xl font-bold text-white mb-4'>
                  Women's Collections
                </h2>
                <Link 
                  to="/collections/all?gender=Women"
                  className='inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-all duration-300 group/button'
                >
                  <span className='mr-2'>Shop Now</span>
                  <FiArrowRight className='transition-transform duration-300 group-hover/button:translate-x-1' />
                </Link>
              </div>
            </div>
          </div>

          {/* Men's Collection */}
          <div className='relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <img 
              src={mensCollectionImage} 
              alt="Men's fashion collection"
              className='w-full h-[500px] md:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent'>
              <div className='absolute bottom-8 left-8'>
                <h2 className='text-3xl font-bold text-white mb-4'>
                  Men's Collections
                </h2>
                <Link 
                  to="/collections/all?gender=Men"
                  className='inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-all duration-300 group/button'
                >
                  <span className='mr-2'>Shop Now</span>
                  <FiArrowRight className='transition-transform duration-300 group-hover/button:translate-x-1' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GenderCollectionSection