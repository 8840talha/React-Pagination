import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(12);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexLast = currentPage * limit;
  const indexFirst = indexLast - limit;
  const currentPosts = posts.slice(indexFirst, indexLast);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Fetched Data</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={limit}
        totalPosts={posts.length}
        paginate={pagination}
      />
    </div>
  );
};

export default App;
