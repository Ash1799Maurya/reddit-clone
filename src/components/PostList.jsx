import React from 'react';
import { ArrowUp, ArrowDown, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';

export default function PostList({ posts }) {
  return (
    <div className="space-y-3">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg p-3">
          <div className="flex">
            <div className="flex flex-col items-center mr-3 w-10">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ArrowUp className="w-5 h-5 text-gray-400" />
              </button>
              <span className="text-xs font-medium my-1">{post.score}</span>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ArrowDown className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span className="font-medium">r/{post.subreddit}</span>
                <span className="mx-1">•</span>
                <span>Posted by u/{post.author}</span>
                <span className="mx-1">•</span>
                <span>{new Date(post.created_utc * 1000).toLocaleDateString()}</span>
              </div>
              
              <h2 className="text-lg font-medium mb-2 leading-snug">{post.title}</h2>
              
              {post.thumbnail && post.thumbnail !== 'self' && (
                <img 
                  src={post.thumbnail} 
                  alt=""
                  className="mb-3 rounded-lg max-h-96 object-cover"
                />
              )}
              
              <div className="flex items-center space-x-4 text-gray-500">
                <button className="flex items-center space-x-2 hover:bg-gray-100 p-1.5 rounded">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-xs">{post.num_comments} Comments</span>
                </button>
                
                <button className="flex items-center space-x-2 hover:bg-gray-100 p-1.5 rounded">
                  <Share2 className="w-4 h-4" />
                  <span className="text-xs">Share</span>
                </button>
                
                <button className="hover:bg-gray-100 p-1.5 rounded">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}