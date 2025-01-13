import React from 'react';

export default function SortTabs({ currentSort, onSortChange }) {
  const tabs = ['hot', 'new', 'controversial', 'rising', 'top'];
  
  return (
    <div className="flex space-x-1 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onSortChange(tab)}
          className={`px-4 py-2 text-sm rounded-full capitalize ${
            currentSort === tab
              ? 'bg-gray-200 text-gray-800'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}