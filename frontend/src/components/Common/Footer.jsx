import React from 'react'
import { TbBrandMeta } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { BsPinterest } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='border-t py-12 bg-gray-50'>
      <div className='container mx-auto px-4 lg:px-6'>
        {/* Main footer content */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
          {/* Newsletter section */}
          <div className='md:col-span-1'>
            <h3 className='text-lg font-semibold text-gray-800 mb-4'>Newsletter</h3>
            <p className='text-gray-600 mb-4 text-sm'>
              Be the first to know about the latest news and updates.
            </p>
            <p className='font-medium text-sm text-gray-700 mb-6'>
              Sign up and get 10% off your first purchase.
            </p>

            <form className='flex flex-col sm:flex-row gap-2'>
              <input 
                type="email"
                placeholder='Enter your email'
                className='p-3 w-full text-sm border border-gray-300 rounded-md 
                focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all'
                required 
              />
              <button
                type='submit'
                className='bg-black text-white px-6 py-3 text-sm rounded-md hover:bg-gray-800 transition-colors whitespace-nowrap'
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-4'>Shop</h3>
            <ul className='space-y-3 text-gray-600'>
              <li>
                <Link to="#" className='hover:text-gray-800 transition-colors text-sm'>Men's Top Wear</Link>
              </li>
              <li>
                <Link to="#" className='hover:text-gray-800 transition-colors text-sm'>Women's Top Wear</Link>
              </li>
              <li>
                <Link to="#" className='hover:text-gray-800 transition-colors text-sm'>Men's Bottom Wear</Link>
              </li>
              <li>
                <Link to="#" className='hover:text-gray-800 transition-colors text-sm'>Women's Bottom Wear</Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-4'>Help</h3>
            <ul className='space-y-3 text-gray-600'>
              <li>
                <Link to="#" className='hover:text-gray-800 transition-colors text-sm'>Contact Us</Link>
              </li>
              <li>
                <Link to="#" className='hover:text-gray-800 transition-colors text-sm'>FAQs</Link>
              </li>
              <li>
                <Link to="#" className='hover:text-gray-800 transition-colors text-sm'>Shipping</Link>
              </li>
              <li>
                <Link to="#" className='hover:text-gray-800 transition-colors text-sm'>Returns</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-4'>Follow Us</h3>
            <div className='flex items-center space-x-4 mb-6'>
              <a href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className='hover:text-gray-500 transition-colors text-gray-600'
              >
                <FaFacebookF size={18} />
              </a>
              <a href="https://www.twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className='hover:text-gray-500 transition-colors text-gray-600'
              >
                <FaTwitter size={18} />
              </a>
              <a href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className='hover:text-gray-500 transition-colors text-gray-600'
              >
                <FaInstagram size={18} />
              </a>
              <a href="https://www.pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className='hover:text-gray-500 transition-colors text-gray-600'
              >
                <BsPinterest size={18} />
              </a>
              <a href="https://www.meta.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className='hover:text-gray-500 transition-colors text-gray-600'
              >
                <TbBrandMeta size={18} />
              </a>
            </div>
            
            <div className='text-sm text-gray-600'>
              <p>Customer Service: <a href="tel:+1234567890" className='hover:text-gray-800'>+1 (234) 567-890</a></p>
              <p>Email: <a href="mailto:help@example.com" className='hover:text-gray-800'>help@example.com</a></p>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className='border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500'>
          <div className='mb-4 md:mb-0'>
            <p>&copy; {new Date().getFullYear()} Your Mithra. All rights reserved.</p>
          </div>
          <div className='flex space-x-6'>
            <Link to="/privacy" className='hover:text-gray-800 transition-colors'>Privacy Policy</Link>
            <Link to="/terms" className='hover:text-gray-800 transition-colors'>Terms of Service</Link>
            <Link to="/cookies" className='hover:text-gray-800 transition-colors'>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer