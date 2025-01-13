/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const FAVORITES = [
  { name: 'r/funymore', count: 156 },
  { name: 'r/breakingnews', count: 12 },
  { name: 'r/lovestory', count: 0 },
  { name: 'r/gamingfun', count: 68 },
];

const REDDIT_FEEDS = [
  { name: 'r/moview', count: 4 },
  { name: 'r/gaming', count: 0 },
  { name: 'r/pics', count: 32 },
  { name: 'r/gifs', count: 0 },
];

export default function Sidebar() {
  return (
    <aside className="w-56">
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-xs text-gray-500 uppercase">Filter by</h3>
            <button className="text-xs text-gray-400 hover:text-gray-600">All</button>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-xs text-gray-500 uppercase">Favorites</h3>
            <button className="text-xs text-gray-400 hover:text-gray-600">All</button>
          </div>
          <ul className="space-y-2">
            {FAVORITES.map((item) => (
              <li key={item.name} className="flex items-center justify-between">
                <a href="#" className="text-sm text-gray-700 hover:text-blue-500">
                  {item.name}
                </a>
                {item.count > 0 && (
                  <span className="text-xs text-gray-500">{item.count}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-xs text-gray-500 uppercase">Reddit Feeds</h3>
            <button className="text-xs text-gray-400 hover:text-gray-600">All</button>
          </div>
          <ul className="space-y-2">
            {REDDIT_FEEDS.map((item) => (
              <li key={item.name} className="flex items-center justify-between">
                <a href="#" className="text-sm text-gray-700 hover:text-blue-500">
                  {item.name}
                </a>
                {item.count > 0 && (
                  <span className="text-xs text-gray-500">{item.count}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}