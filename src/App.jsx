import { useState, useEffect } from 'react'
import Post from './components/Post'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://www.reddit.com/r/programmerhumor.json');
        const data = await response.json();
        setPosts(data.data.children);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <h2>Welcome to the Programmer Humor page</h2>
      <div className="posts-container">
        {posts.map((post) => (
          <Post
            key={post.data.id}
            title={post.data.title}
            image={post.data.url_overridden_by_dest}
          />
        ))}
      </div>
    </>
  )
}

export default App