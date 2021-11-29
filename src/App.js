import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'js1' , body: 'test'},
    {id: 2, title: 'js2' , body: 'test'},
    {id: 3, title: 'js3' , body: 'test'},
  ])

  const createPost = (post) => {
    setPosts([...posts, {...post}]);
  }

  const removePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList remove={removePost} title="List posts" posts={posts}/>
    </div>
  );
}

export default App;
