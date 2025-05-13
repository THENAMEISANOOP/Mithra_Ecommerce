import React from 'react'
import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'

const Topbar = () => {
  return (
    <div className='bg-[#ea2e0e] text-white'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between py-2'>
          {/* Social Icons */}
          <div className='flex items-center space-x-4 mb-2 md:mb-0'>
            <a href='#' className='hover:text-gray-300 transition-colors'>
              <TbBrandMeta className='h-5 w-5' />
            </a>
            <a href='#' className='hover:text-gray-300 transition-colors'>
              <IoLogoInstagram className='h-5 w-5' />
            </a>
            <a href='#' className='hover:text-gray-300 transition-colors'>
              <RiTwitterXLine className='h-5 w-5' />
            </a>
          </div>

          {/* Shipping Info */}
          <div className='text-sm text-center mb-2 md:mb-0'>
            <span>We Ship World-Wide Fast and reliable shipping</span>
          </div>

          {/* Contact Info */}
          <div className='text-sm flex items-center space-x-2'>
            <a href='#' className='text-white hover:text-gray-300 transition-colors'>
              Contact Us
            </a>
            <span>+1 234 567 890</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar