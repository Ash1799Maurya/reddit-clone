/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Search, Home, TrendingUp, Menu, Bell, Mail } from 'lucide-react';

export default function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-white px-4 py-2 flex items-center justify-between border-b">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <img src="/reddit-logo.svg" alt="Reddit" className="w-8 h-8" />
          <span className="text-xl font-semibold">reddit</span>
        </div>
        
        <nav className="flex items-center space-x-2">
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded-md">
            <Home className="w-5 h-5" />
            <span className="text-sm">Home</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded-md">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm">Popular</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded-md">
            <Menu className="w-5 h-5" />
            <span className="text-sm">All</span>
          </a>
        </nav>
      </div>

      <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              if (e && e.target) {
                setSearchQuery(e.target.value);
              } else {
                console.error('Event or target is undefined');
              }
            }}
            placeholder="Find community or post"
            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-full border border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none text-sm"
          />
        </div>
      </form>

      <div className="flex items-center space-x-4">
        <button className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-orange-600">
          Create Post
        </button>
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
        <Mail className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
        <div className="w-8 h-8 rounded-full bg-gray-200 cursor-pointer"></div>
      </div>
    </header>
  );
}