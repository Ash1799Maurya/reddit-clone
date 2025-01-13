import React from 'react';

export default function Pagination({ after, before, onNext, onPrevious }) {
  return (
    <div className="flex justify-center space-x-4 mt-6 mb-8">
      <button
        onClick={onPrevious}
        disabled={!before} 
        className={`px-4 py-2 rounded-full text-sm font-medium ${
          before
            ? 'bg-orange-500 text-white hover:bg-orange-600'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        Previous
      </button>
      <button
        onClick={onNext}
        disabled={!after}  
        className={`px-4 py-2 rounded-full text-sm font-medium ${
          after
            ? 'bg-orange-500 text-white hover:bg-orange-600'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
  );
}
