import { useState, useEffect } from 'react'
import PostCreate from './components/PostCreate'
import { PostList } from './components/postList'
import axios from 'axios'

import './App.css'


function App() {



const [posts, setPosts] = useState([]);
// const [comment, setComment] = useState([])

  useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:4002/events/get");
      setPosts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchPosts();
}, []);

  return (
    <>
    <div className=''>
    <h2 className='pt-2 text-3xl'>Create Post</h2>
    <PostCreate setPosts={setPosts} />
    <hr className="my-3 border-black" />
    <h2 className='text-3xl'>Post</h2>
    <PostList posts={posts} setPosts={setPosts}/>
    </div>
    
    </>
  )
}

export default App
