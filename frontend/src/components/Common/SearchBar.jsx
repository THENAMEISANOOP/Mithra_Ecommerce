import React, { useState } from 'react'
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchTerm)
    // Add your search logic here
  }

  return (
    <form onSubmit={handleSearch} className='relative'>
      <div className='flex items-center bg-white rounded-lg border border-gray-300 overflow-hidden'>
        <input 
          type='text'
          placeholder='Search products...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='py-2 pl-4 pr-10 focus:outline-none w-64 focus:w-72 transition-all duration-200'
        />
        <button 
          type='submit'
          className='absolute right-0 top-0 h-full px-3 text-gray-600 hover:text-black'
        >
          <HiMagnifyingGlass className='h-5 w-5' />
        </button>
      </div>
    </form>
  )
}

export default SearchBar