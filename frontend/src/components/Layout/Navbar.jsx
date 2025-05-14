import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiBars3BottomRight,
  HiMagnifyingGlass,
  HiXMark
} from 'react-icons/hi2';
import CartDrawer from './CartDrawer';

const Navbar = () => {
   const[drawerOpen, setDrawerOpen] = React.useState(false)
    
    const toggleCartDrawer = () => {
      setDrawerOpen(!drawerOpen)
    }
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    setShowSearch(false);
    setSearchTerm('');
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
    <nav className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        {/* Search Bar (shown when activated) */}
        {showSearch && (
          <div className='flex items-center py-3 w-full'>
            <form onSubmit={handleSearch} className='flex-1 flex items-center relative'>
              <input
                type='text'
                placeholder='Search products...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full py-2 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ea2e0e]'
                autoFocus
              />
              <button 
                type='submit'
                className='absolute right-3 text-gray-500 hover:text-black'
              >
                <HiMagnifyingGlass className='h-5 w-5' />
              </button>
            </form>
            <button 
              type='button'
              onClick={() => setShowSearch(false)}
              className='ml-4 text-gray-500 hover:text-black'
            >
              <HiXMark className='h-6 w-6' />
            </button>
          </div>
        )}

        {/* Regular Navbar */}
        {!showSearch && (
          <>
            <div className='flex items-center justify-between py-4'>
              {/* Left - Logo and Mobile Menu Button */}
              <div className='flex items-center'>
                <button 
                  onClick={toggleMobileMenu}
                  className='mr-4 md:hidden text-gray-700'
                >
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
                <button 
                  onClick={() => setShowSearch(true)}
                  className='text-gray-700 hover:text-black'
                >
                  <HiMagnifyingGlass className='h-6 w-6' />
                </button>
                
                <Link to="/profile" className='text-gray-700 hover:text-black transition-colors'>
                  <HiOutlineUser className='h-6 w-6' />
                </Link>
                
                <button onClick={toggleCartDrawer} className='relative text-gray-700 hover:text-black transition-colors'>
                  <HiOutlineShoppingCart className='h-6 w-6' />
                  <span className='absolute -top-2 -right-2 bg-[#ea2e0e] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                    4
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Menu (shown when hamburger is clicked) */}
            {showMobileMenu && (
              <div className='md:hidden pb-4'>
                <div className='flex flex-col space-y-3'>
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
              </div>
            )}
          </>
        )}
      </div>
    </nav>
    <CartDrawer drawerOpen={drawerOpen}  toggleCartDrawer={toggleCartDrawer}/>
    </>

  );
};

export default Navbar;