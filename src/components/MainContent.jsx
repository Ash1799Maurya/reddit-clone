import React, { useState, useEffect } from 'react';
import SortTabs from './SortTabs';
import PostList from './PostList';
import { fetchPosts } from '../services/api';

const MainContent = () => {
  const [posts, setPosts] = useState([]);
  const [sortBy, setSortBy] = useState('hot');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchPosts(sortBy); // Make sure fetchPosts returns data correctly
        setPosts(data.data.children); // Assuming this is the correct path to posts
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [sortBy]); // Re-fetch posts when sortBy changes

  return (
    <div className="flex-1">
      <div className="mb-6">
        <h1 className="text-xl font-semibold mb-4">Popular</h1>
        <SortTabs sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {loading ? (
        <div className="text-center">Loading posts...</div> // Display loading message or spinner
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
};

export default MainContent;
