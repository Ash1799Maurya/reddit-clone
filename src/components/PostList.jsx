import React from 'react';
import PostCard from './PostCard';

const PostList = ({ posts, loading }) => {
  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }
  if (posts.length === 0) {
    return <div className="text-center py-8">No posts available.</div>;
}

  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <PostCard key={post.data.id || index} post={post} />
      ))}
    </div>
  );
};

export default PostList;
