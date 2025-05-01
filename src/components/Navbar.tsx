import React from 'react'
import { HomeIcon, MagnifyingGlassIcon as SearchIcon, PlusCircleIcon, HeartIcon, UserIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" 
              alt="Instagram" 
              className="h-8"
            />
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <SearchIcon className="w-4 h-4 absolute left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 pl-10 pr-4 py-1.5 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-200 w-64"
            />
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-6">
            <HomeIcon className="w-6 h-6 text-ig-secondary" />
            <SearchIcon className="w-6 h-6 text-ig-secondary md:hidden" />
            <PlusCircleIcon className="w-6 h-6 text-ig-secondary" />
            <HeartIcon className="w-6 h-6 text-ig-secondary" />
            <UserIcon className="w-6 h-6 text-ig-secondary" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 