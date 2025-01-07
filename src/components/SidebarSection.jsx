import React from 'react'

function SidebarSection() {
  return (
    function SidebarSection({ title, items = [] }) { // Default to empty array
        return (
          <div className='mb-8'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-sm font-semibold text-gray-700'>{title}</h2>
              <span className='text-xs text-gray-500'>ALL</span>
            </div>
            <div className='space-y-3'>
              {items.map((item, index) => {
                return (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                      <span className="text-sm text-gray-700">{item.name}</span>
                    </div>
                    {item.count > 0 && (
                      <span className="text-xs text-gray-500">{item.count}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      }
  )
}

export default SidebarSection