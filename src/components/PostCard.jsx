/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import { MessageSquare, MoreHorizontal, Share2 } from 'lucide-react'

function PostCard({ post }) {
    const { data } = post || {};
  return (
    <div className='bg-white rounded-lg border p-4'>
        <div className='flex gap-4'>
            <img 
            src="/api/placeholder/100/100"
            alt="Post thumbnail"
            className='w-24 h-24 object-cover rounded' />
        <div className='flex-1'>
            <h2 className='text-lg font-medium mb-2'>{data.title}</h2>
        <div className='flex items-center text-sm text-gray-500 mb-2'>
            <span>Posted by u/{data.author}</span>
            <span className='mx-2'>.</span>
            <span>{new Date(data.created * 1000).toLocaleString()}</span>
        </div>
        <div className='flex items-center gap-4'>
            <button className='flex items-center gap-1 text-gray-500'>
                <MessageSquare size={16} />
                {data.num_comments} Comments
            </button>
            <button className='flex items-center gap-1 text-gray-500'>
                <Share2 size={16}/> Share
            </button>
            <button className='text-gray-500'>
                <MoreHorizontal size={16} />
            </button>
        </div>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <button className='text-gray-500'>▲</button>
            <span className="text-sm font-medium">{data.score}</span>
            <button className="text-gray-400">▼</button>
        </div>
        </div>
    </div>
  )
}

export default PostCard