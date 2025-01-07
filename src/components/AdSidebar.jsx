import React from 'react';
import AdCard from './AdCard';

const AdSidebar = () => {
  return (
    <div className="w-64 flex-shrink-0">
      <div className="sticky top-4">
        <AdCard />
      </div>
    </div>
  );
};

export default AdSidebar;