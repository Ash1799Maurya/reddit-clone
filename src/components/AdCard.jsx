import React from 'react';

function AdCard() {
  return (
    <div className="bg-white border rounded-lg p-4">
      <div className="text-lg font-bold mb-2">SUMMER BIG SALE</div>
      <div className="text-gray-600 mb-4">Limited Time Offer!</div>
      <button className="w-full bg-orange-500 text-white rounded-full py-2 font-medium">
        GET STARTED
      </button>
    </div>
  );
};

export default AdCard;