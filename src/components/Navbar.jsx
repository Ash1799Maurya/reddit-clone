import React from 'react';
import redditLogo from '../assets/images/reddit.png';
import { Home, TrendingUp, SortAsc } from 'lucide-react';
import SearchBar from './SearchBar'; 

function Navbar() {
  return (
    <header className="py-4 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <img
            src={redditLogo}
            alt="logo"
            style={{ width: '32px', height: '32px', objectFit: 'contain' }}
          />
          <span className="font-bold">reddit</span>
        </div>
        <nav className="flex items-center gap-6">
          <button aria-label="Home" className="flex items-center gap-2 text-gray-700 hover:text-black">
            <Home size={20} />
            Home
          </button>
          <button aria-label="Popular" className="flex items-center gap-2 text-gray-700 hover:text-black">
            <TrendingUp size={20} />
            Popular
          </button>
          <button aria-label="Sort" className="flex items-center gap-2 text-gray-700 hover:text-black">
            <SortAsc size={20} />
            Sort
          </button>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <SearchBar />
        <button className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium">
          Create Post
        </button>
      </div>
    </header>
  );
}

export default Navbar;
