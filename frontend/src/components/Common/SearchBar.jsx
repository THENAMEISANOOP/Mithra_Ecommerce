import React from 'react'
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [isOpen, setIsOpen] = React.useState(false)

  const handleSearchToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchTerm)
    setIsOpen(false)
  }

  return (
    <div className='relative'>
      {isOpen ? (
        <form onSubmit={handleSearch} className='flex items-center bg-white rounded-lg shadow-md p-1'>
          <div className='relative flex-grow'>
            <input 
              type='text'  
              placeholder='Search products...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='py-2 pl-4 pr-10 rounded-lg focus:outline-none w-full placeholder-gray-400'
              autoFocus
            />
            <button 
              type='submit' 
              className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black'
            >
              <HiMagnifyingGlass className='h-5 w-5' />
            </button>
          </div>
          <button 
            type='button' 
            onClick={handleSearchToggle}
            className='ml-2 text-gray-600 hover:text-black p-1'
          >
            <HiXMark className='h-6 w-6' />
          </button>
        </form>
      ) : (
        <button 
          onClick={handleSearchToggle}
          className='text-gray-700 hover:text-black transition-colors p-1'
        >
          <HiMagnifyingGlass className='h-6 w-6' />
        </button>
      )}
    </div>
  )
}

export default SearchBar