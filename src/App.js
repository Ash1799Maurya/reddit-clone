import React, { useEffect, useState, useCallback } from 'react';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Sidebar from './components/Sidebar';
import SortTabs from './components/SortTabs';
import PostList from './components/PostList';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState('hot');
  const [loading, setLoading] = useState(true);
  const [after, setAfter] = useState(null);
  const [before, setBefore] = useState(null);
  const [currentQuery, setCurrentQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const fetchPosts = useCallback(async (params = {}) => {
    setLoading(true);
    try {
      let url = '';
      if (params.query) {
        url = `https://www.reddit.com/search.json?q=${encodeURIComponent(params.query)}&limit=10`;
      } else {
        url = `https://www.reddit.com/r/popular/${sort}/.json?limit=10`;
      }

      if (params.after) {
        url += `&after=${params.after}`;
      }
      if (params.before) {
        url += `&before=${params.before}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      setPosts(
        data.data.children.map((child) => ({
          id: child.data.id,
          title: child.data.title,
          author: child.data.author,
          created_utc: child.data.created_utc,
          num_comments: child.data.num_comments,
          score: child.data.score,
          thumbnail: child.data.thumbnail,
          subreddit: child.data.subreddit,
          ups: child.data.ups,
        }))
      );

      setAfter(data.data.after);
      setBefore(data.data.before);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    setLoading(false);
  }, [sort]);

  useEffect(() => {
    if (!isSearching) {
      fetchPosts();
    }
  }, [sort, isSearching, fetchPosts]);

  const handleSearch = (query) => {
    if (query.trim()) {
      setIsSearching(true);
      setCurrentQuery(query);
      fetchPosts({ query });
    } else {
      setIsSearching(false);
      setCurrentQuery('');
      fetchPosts();
    }
  };

  // Debounced search function
  const debounceSearch = debounce((query) => handleSearch(query), 500);

  const handleSearchInputChange = (e) => {
    debounceSearch(e.target.value);
  };

  const handleNext = () => {
    if (after) {
      if (isSearching) {
        fetchPosts({ after, query: currentQuery });
      } else {
        fetchPosts({ after });
      }
    }
  };

  const handlePrevious = () => {
    if (before) {
      if (isSearching) {
        fetchPosts({ before, query: currentQuery });
      } else {
        fetchPosts({ before });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={handleSearchInputChange} />
      <div className="max-w-6xl mx-auto pt-6 px-4">
        <div className="flex gap-6">
          <Sidebar />
          <main className="flex-1">
            <h1 className="text-xl font-bold mb-4">
              {isSearching ? `Search Results for "${currentQuery}"` : 'Popular'}
            </h1>
            {!isSearching && <SortTabs currentSort={sort} onSortChange={setSort} />}
            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
            ) : (
              <>
                <PostList posts={posts} />
                <Pagination
                  after={after}
                  before={before}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                />
              </>
            )}
          </main>
          <div className="w-80">
            <div className="bg-white rounded-lg p-4">
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1595761359797-1d1c222b5580?auto=format&fit=crop&w=320"
                  alt="Advertisement"
                  className="w-full rounded-lg mb-4"
                />
                <h3 className="font-bold mb-2">Advertise on Reddit</h3>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Debounce function to delay search calls
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}
