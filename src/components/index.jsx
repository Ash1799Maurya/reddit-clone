import React from 'react';
import SidebarSection from './SidebarSection';

const Sidebar = () => {
  const favorites = [
    { name: 'r/funymore', count: 156 },
    { name: 'r/breakingnews', count: 12 },
    { name: 'r/lovestory', count: 0 },
    { name: 'r/gamingfun', count: 68 }
  ];

  const redditFeeds = [
    { name: 'r/moview', count: '04' },
    { name: 'r/gaming', count: 0 },
    { name: 'r/pics', count: 32 },
    { name: 'r/gifs', count: 0 }
  ];

  const community = [
    { name: 'r/funymore', count: 0 },
    { name: 'r/breakingnews', count: 0 },
    { name: 'r/gaming', count: 43 },
    { name: 'r/lovestory', count: 12 }
  ];

  return (
    <div className="w-64 flex-shrink-0">
      <div className="sticky top-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500">Filter by</span>
          <span className="text-xs text-gray-400">▼</span>
        </div>
        
        <SidebarSection title="FAVORITES" items={favorites} />
        <SidebarSection title="REDDIT FEEDS" items={redditFeeds} />
        <SidebarSection title="COMMUNITY" items={community} />
      </div>
    </div>
  );
};

export default Sidebar;