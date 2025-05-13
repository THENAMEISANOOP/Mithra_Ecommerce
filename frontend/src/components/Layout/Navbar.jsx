import React from 'react'
import { Link } from 'react-router-dom'
import {  
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiBars3BottomRight,
    HiMagnifyingGlass,
} from 'react-icons/hi2'
import SearchBar from '../Common/SearchBar'

const Navbar = () => {
  return (
    <nav className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between py-4'>
          {/* Left - Logo */}
          <div className='flex items-center'>
            <button className='mr-4 md:hidden text-gray-700'>
              <HiBars3BottomRight className='h-6 w-6' />
            </button>
            <Link to='/' className='text-2xl font-bold text-[#ea2e0e] hover:text-[#c02612] transition-colors'>
              Mithra
            </Link>  
          </div>

          {/* Center - Menu (hidden on mobile) */}
          <div className='hidden md:flex space-x-6'>
            <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase transition-colors">
              Men
            </Link>
            <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase transition-colors">
              Women
            </Link>
            <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase transition-colors">
              Topwear
            </Link>
            <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase transition-colors">
              Bottomwear
            </Link>
          </div>

          {/* Right - Icons */}
          <div className='flex items-center space-x-4'>
            <div className='hidden md:block'>
              <SearchBar />
            </div>
            
            <Link to="/profile" className='text-gray-700 hover:text-black transition-colors'>
              <HiOutlineUser className='h-6 w-6' />
            </Link>
            
            <Link to="/cart" className='relative text-gray-700 hover:text-black transition-colors'>
              <HiOutlineShoppingCart className='h-6 w-6' />
              <span className='absolute -top-2 -right-2 bg-[#ea2e0e] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                4
              </span>
            </Link>

            <button className='md:hidden text-gray-700'>
              <HiMagnifyingGlass className='h-6 w-6' />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar