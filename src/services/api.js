const API_BASE_URL = 'https://www.reddit.com/dev/api'

export const fetchPosts = async ( sortby, limit = 6) => {
    try {
        const response = await fetch(`${API_BASE_URL}/r/all/${sortby}/.json?limit=${limit}`)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export const searchPosts = async ( query, limit = 6) => {
    try {
        const response = await fetch(`${API_BASE_URL}/search.json?q=${query}&limit=${limit}`)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error('Error searching posts:', error);
        throw error;
    }
}