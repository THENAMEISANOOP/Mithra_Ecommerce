import React from 'react'
import featured from '../../assets/featured.webp';
import { Link } from 'react-router-dom';

const FeaturedCollection = () => {
  return (
    <section className='py-12 md:py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl overflow-hidden shadow-lg'>
            {/* Left Content */}
            <div className='w-full lg:w-1/2 p-8 md:p-12 lg:p-16 space-y-4 md:space-y-6 text-center lg:text-left'>
                <h2 className='text-lg font-semibold text-gray-700 tracking-wide'>
                    Comfort And Style
                </h2>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
                    Apparel Made for Your Everyday
                </h1>
                <p className='text-base md:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0'>
                    Discover high-quality, comfortable clothing that effortlessly blends
                    fashion and function. Designed to make you look and feel great every day.
                </p>
                <div className='pt-2'>
                    <Link to="/collections/all" className="inline-block bg-black text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg">
                        Shop Now
                    </Link>
                </div>
            </div>

            {/* Right Image */}
            <div className='w-full lg:w-1/2'>
                <img 
                    src={featured}
                    alt="Featured Collection"
                    className='w-full h-full sm:h-80 md:h-96 lg:h-full object-cover object-center lg:rounded-r-3xl' 
                />
            </div>
        </div>
    </section>
  )
}

export default FeaturedCollection