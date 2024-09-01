/* BoardList.js */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BoardList = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', content: '' });

    useEffect(() => {
      axios.get('/api/posts')
        .then(response => setPosts(response.data))
        .catch(error => console.error('Error:', error));
    }, []);

    const handleSubmit = () => {
      axios.post('/api/posts', newPost)
        .then(() => {
          setNewPost({ title: '', content: '' });
          return axios.get('/api/posts');
        })
        .then(response => setPosts(response.data))
        .catch(error => console.error('Error:', error));
    };

  return (
        <div>
          <h1>Post List</h1>
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
          <input
            type="text"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            placeholder="Title"
          />
          <textarea
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            placeholder="Content"
          />
          <button onClick={handleSubmit}>Add Post</button>
        </div>
  );
};

export default BoardList;