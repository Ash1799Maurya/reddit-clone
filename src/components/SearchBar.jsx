import { Search } from 'lucide-react';
import React, { useState } from 'react'
import { searchPosts } from '../services/api'

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery) return;

        try {
            const data = await searchPosts(searchQuery);
            console.log(data);
        } catch (error) {
            console.error('Error searching', error);
        }
    };

  return (
    <form onSubmit={handleSearch} className='relative'>
        <input 
        type="text"
        placeholder='Find community or post'
        className='w-64 px-4 py-2 bg-gray-100 rounded-full text-sm'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
         />
         <Search className='absolute right-3 top-2.5 text-gray-400' size={20} />
    </form>
  )
}

export default SearchBar