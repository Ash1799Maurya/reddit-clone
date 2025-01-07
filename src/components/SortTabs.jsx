import React from 'react'

function SortTabs({sortBy, setSortBy})  {
    const sortOptions = ['Hot', 'New', 'Controversial', 'Rising', 'Top']
  return (
    <div className='flex gap-4 border-b'>
        {sortOptions.map((sort) => (
            <button 
            key={sort}
            onClick={() => setSortBy(sort.toLowerCase())}
            className={`px-4 py-2 text-sm ${
                sortBy === sort.toLowerCase()
                ? 'border-b-2 border-orange-500 text-orange-500'
                : 'text-gray-600'
            }`}>
                {sort}
            </button>
        ))}
    </div>
  )
}

export default SortTabs